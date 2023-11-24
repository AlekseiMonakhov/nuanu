import { GetServerSidePropsContext, Redirect } from 'next';
import nodeFetch from 'node-fetch';
import getLexicon from '@/lexicon/getLexicon';
import { IAppPage, IPageAPI } from '@/types/Page';
import { getHost } from '@/utils/server/getHost';
import { removeDublicateSlashes } from '@anton.bobrov/react-hooks';
import { getFetchURL } from './getFetchURL';
import { getIsSSPRedirected } from './getIsSSPRedirected';

export type TResult = IAppPage | { redirect: Redirect };

async function fetchProps(context: GetServerSidePropsContext) {
  const { req, res, resolvedUrl } = context;

  // get urls
  const fetchURL = getFetchURL(context);
  const baseUrl = getHost(context.req);
  const currentUrl = removeDublicateSlashes(`${baseUrl}/${resolvedUrl}`);
  const currentUrlData = new URL(currentUrl);
  const canonicalUrl = removeDublicateSlashes(
    `${currentUrlData.origin}/${currentUrlData.pathname}`,
  );

  // set headers
  const headers = { ...req.headers };
  delete headers.host;

  // fetch ssp
  const response = await nodeFetch(fetchURL, {
    headers: {
      ...(headers as any),
    },
  });

  // check if redirected
  const isRedirected = getIsSSPRedirected(context, response);
  if (isRedirected) {
    return { redirect: isRedirected };
  }

  // update response status
  res.statusCode = response.status;
  res.statusMessage = response.statusText;

  // get page data
  const jsonProps = (await response.json()) as IPageAPI<any, any>;
  const props: IAppPage = {
    page: {
      props: {
        ...jsonProps,
        key: +new Date(),
        lexicon: getLexicon(jsonProps.global.lang),
        url: {
          base: baseUrl,
          href: currentUrl,
          canonical: canonicalUrl,
        },
      },
    },
  };

  // set meta image
  if (props.page) {
    if (!props.page.props.global.meta.image && props.page.props.template) {
      const matches = JSON.stringify(props.page.props.template).match(
        /(http?s)?[^"' ]*\.(jpg|png)/,
      );

      if (matches && props.page.props.global.meta) {
        props.page.props.global.meta.image = matches.shift();
      }
    }
  }

  return props;
}

/**
 * Fetch server side props
 */
export async function fetchSSP(
  context: GetServerSidePropsContext,
): Promise<TResult> {
  const { res } = context;

  try {
    const props = await fetchProps(context);

    return props;
  } catch (error) {
    res.statusCode = 500;

    return {
      error: {
        name: `${error}`,
        body: 'Some error',
      },
    };
  }
}
