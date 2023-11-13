import { getSSP } from '@/utils/server/ssp/getSSP';
import { GetServerSideProps } from 'next';

const Router = () => null;
export default Router;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await getSSP(context);

  if ('redirect' in data) {
    return { redirect: data.redirect };
  }

  if (data.page || data.error) {
    return {
      props: data,
    };
  }

  return {
    notFound: true,
  };
};
