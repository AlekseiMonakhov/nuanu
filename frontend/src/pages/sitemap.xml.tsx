import { getBaseURL } from '@/utils/server/getBaseUrl';
import { removeDublicateSlashes } from '@anton.bobrov/react-hooks';
import { GetServerSideProps } from 'next';

const Sitemap = () => {};
export default Sitemap;

interface IURL {
  loc: string;
  lastmod?: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { res } = context;

  let resources = '';
  let array: IURL[] = [];

  if (process.env.API_URL) {
    const apiUrl = new URL(
      removeDublicateSlashes(`${process.env.API_URL}/sitemap`),
    );

    const results = await fetch(apiUrl.href);
    array = (await results.json()) as IURL[];
  } else {
    array = [{ loc: '/' }];
  }

  if (Array.isArray(array)) {
    resources += array
      .map(
        (item) => `
          <url>
            <loc>${getBaseURL(item.loc)}</loc>
            ${item.lastmod ? `<lastmod>${item.lastmod}</lastmod>` : ''}
          </url>
        `,
      )
      .join('');
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${resources}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};
