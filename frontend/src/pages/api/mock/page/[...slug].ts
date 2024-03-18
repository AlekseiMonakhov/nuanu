import type { NextApiRequest, NextApiResponse } from 'next';
import { MOCK_GET_PAGE } from '@/mock/GET_PAGE';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const path = Array.isArray(req.query.slug) ? req.query.slug.join('/') : '/';

  res.json(MOCK_GET_PAGE(path));
};

export default handler;
