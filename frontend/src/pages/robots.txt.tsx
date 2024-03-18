import { getBaseURL } from '@/utils/server/getBaseUrl';
import { GetServerSideProps } from 'next';

const Robots = () => {};
export default Robots;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { res } = context;

  const content: string[] = [];
  content.push('User-agent: *');

  if (process.env.SEARCHABLE !== 'true') {
    content.push('Disallow: /');
  } else {
    content.push('Disallow: *?*');
    content.push(`Sitemap: ${getBaseURL('sitemap.xml')}`);
  }

  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  res.setHeader('Content-Type', 'text/plain');
  res.write(content.join('\n'));
  res.end();

  return {
    props: {},
  };
};
