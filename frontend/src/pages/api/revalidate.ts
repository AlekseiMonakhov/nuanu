import { isString } from '@anton.bobrov/react-hooks';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { path } = req.query;

  // Check for secret to confirm this is a valid request
  if (req.query.token !== process.env.SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    if (isString(path)) {
      await res.revalidate(path);

      return res.json({ revalidated: true });
    }

    return res.status(500).send({ message: 'Wrong Path' });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send({ message: 'Error Revalidating' });
  }
}
