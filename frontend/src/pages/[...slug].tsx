import { getSwrRevalidate } from '@/utils/server/getSwrRevalidate';
import { getPageProps } from '@/utils/server/pageProps/getPageProps';
import { GetStaticPaths, GetStaticProps } from 'next';

const Router = () => null;

export default Router;

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const path = Array.isArray(params?.slug) ? `/${params?.slug.join('/')}` : '/';

  const data = await getPageProps({ path, locale });

  if (data.page.templateName === 'NotFound') {
    return { notFound: true };
  }

  return {
    props: data,
    revalidate: getSwrRevalidate(data.page.global.meta.swr),
  };
};

export const getStaticPaths = (async () => ({
  paths: [],
  fallback: 'blocking',
})) satisfies GetStaticPaths;
