import type { NextApiRequest, NextApiResponse } from 'next';
import { DeepRequired } from 'ts-essentials';
import { IFormResponse } from '@/components/Form/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DeepRequired<IFormResponse>>,
) {
  // 200 status for succes, 422 for error
  // res.status(422);

  res.json({
    errors: {
      email: ['Invalid email', 'Wrong domain'],
    },
  });
}
