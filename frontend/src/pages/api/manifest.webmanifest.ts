import { getBaseURL } from '@/utils/server/getBaseUrl';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');

  res.json({
    name: 'Nuanu Inc.',
    short_name: 'Nuanu Inc.',
    start_url: getBaseURL(),
    display: 'fullscreen',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/image/192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/image/512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  });
}
