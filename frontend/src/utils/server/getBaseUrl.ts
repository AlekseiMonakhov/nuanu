import { removeDublicateSlashes } from '@anton.bobrov/react-hooks';

export function getBaseURL(path?: string) {
  const vercelURL = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : undefined;

  const base =
    process.env.NEXT_PUBLIC_URL ?? vercelURL ?? 'http://localhost:3000';

  if (path) {
    return removeDublicateSlashes(`${base}/${path}`);
  }

  return base;
}
