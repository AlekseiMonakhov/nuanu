import { getSwrRevalidate } from '@/utils/server/getSwrRevalidate';
import { getPageProps } from '@/utils/server/pageProps/getPageProps';
import { GetStaticProps } from 'next';

const Router = () => null;

export default Router;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const data = await getPageProps({ path: '/not-found', locale });

  return {
    props: data,
    revalidate: getSwrRevalidate(data.page.global.meta.swr),
  };
};
