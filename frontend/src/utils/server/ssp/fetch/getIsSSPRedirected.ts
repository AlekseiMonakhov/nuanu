import { GetServerSidePropsContext, Redirect } from 'next';
import { Response } from 'node-fetch';
import { getHost } from '@/utils/server/getHost';

export function getIsSSPRedirected(
  context: GetServerSidePropsContext,
  response: Response,
): Redirect | null {
  const { req, resolvedUrl } = context;

  const isRedirected = !/\.(.*)$/.test(resolvedUrl) && response.redirected;
  const responseURL = response.url;

  if (!isRedirected || !responseURL) {
    return null;
  }

  const url = new URL(responseURL, getHost(req));

  const isInternalRedirect =
    url.origin === getHost(req) ||
    (!!process.env.NEXT_PUBLIC_API_PAGE &&
      url.origin === new URL(process.env.NEXT_PUBLIC_API_PAGE).origin);

  if (isInternalRedirect) {
    return {
      destination: url.pathname + url.search,
      statusCode: 301,
    };
  }

  return {
    destination: url.href,
    statusCode: 301,
  };
}
