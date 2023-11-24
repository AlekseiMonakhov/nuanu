import { getHost } from '@/utils/server/getHost';
import { removeDublicateSlashes } from '@anton.bobrov/react-hooks';
import { GetServerSideProps } from 'next';
import nodeFetch from 'node-fetch';

const Sitemap = () => {};
export default Sitemap;

interface IURL {
  loc: string;
  lastmod: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { res, req } = context;

  let resources = '';

  if (process.env.NEXT_PUBLIC_API) {
    const apiUrl = new URL(
      removeDublicateSlashes(`${process.env.NEXT_PUBLIC_API}/sitemap`),
    );
    apiUrl.searchParams.set('requireSiteMap', 'true');

    const results = await nodeFetch(apiUrl.href);
    const json = (await results.json()) as IURL[];

    if (Array.isArray(json)) {
      resources += json
        .map(
          (item) => `
        <url>
          <loc>${getHost(req, item.loc)}</loc>
          <lastmod>${item.lastmod}</lastmod>
        </url>
      `,
        )
        .join('');
    }
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
