import { removeDublicateSlashes } from '@anton.bobrov/react-hooks';
import { GetServerSidePropsContext } from 'next';
import { getHost } from '@/utils/server/getHost';

export function getFetchURL(context: GetServerSidePropsContext): URL {
  const { resolvedUrl, req } = context;

  let apiURL: URL;

  if (process.env.NEXT_PUBLIC_API_PAGE) {
    apiURL = new URL(
      removeDublicateSlashes(
        `${process.env.NEXT_PUBLIC_API_PAGE}/${resolvedUrl}`,
      ),
    );
  } else {
    apiURL = new URL(
      removeDublicateSlashes(`${getHost(req)}/api/mock/page/${resolvedUrl}`),
    );
  }

  const { origin, search } = apiURL;
  const pathname = apiURL.pathname.endsWith('/')
    ? apiURL.pathname.substring(0, apiURL.pathname.length - 1)
    : apiURL.pathname;

  const finalUrl = new URL(`${origin}${pathname}${search}`);
  finalUrl.searchParams.delete('slug');

  return finalUrl;
}
