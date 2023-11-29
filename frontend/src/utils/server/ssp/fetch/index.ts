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
    const { global, template } = props.page.props;

    // set meta image
    if (!global.meta.image && template) {
      const matches = JSON.stringify(template).match(
        /(http?s)?[^"' ]*\.(jpg|png)/,
      );

      if (matches && global.meta) {
        global.meta.image = matches.shift();
      }
    }

    // set cache
    const isCacheable = global.meta.cacheable ?? true;

    if (isCacheable) {
      const maxAge = process.env.NEXT_PUBLIC_API_PAGE ? 3600 : 2592000;

      context.res.setHeader(
        'Cache-Control',
        `public, max-age=${maxAge}, stale-while-revalidate=2592000`,
      );
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
