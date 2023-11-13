import { IncomingMessage } from 'http';
import { NextApiRequest } from 'next';
import { removeDublicateSlashes } from '@anton.bobrov/react-hooks';

export function getHost(req: NextApiRequest | IncomingMessage, pathname = '') {
  let host =
    (req.headers['x-forwarded-host'] as string) ||
    req.headers.host ||
    'localhost:3000';

  let protocol = 'https://';

  if (
    host.includes('localhost') ||
    host.includes('192.168.') ||
    host.includes('0.0.')
  ) {
    protocol = 'http://';
  }

  host = protocol + host;

  const publicURL = process.env.NEXT_PUBLIC_URL || host;

  return removeDublicateSlashes(`${publicURL}/${pathname}`);
}
