import type { NextApiRequest, NextApiResponse } from 'next';
import { DeepRequired } from 'ts-essentials';
import { IFormResponse } from '@/components/Form/types';
import mailchimp from '@mailchimp/mailchimp_marketing';
import { getFormData } from '@/utils/server/getFormData';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DeepRequired<IFormResponse>>,
) {
  const formData = await getFormData(req);
  const formFields = formData.formFields as any;

  mailchimp.setConfig({
    apiKey: 'f50154c3aaf729f4740e1bc78d6ce21d-us18',
    server: 'us18',
  });

  const errors: string[] = [];

  try {
    await mailchimp.lists.addListMember('285eedad12', {
      email_address: formFields.email[0],
      status: 'subscribed',
    });
  } catch (e: any) {
    if (e.response.error.text) {
      const text = JSON.parse(e.response.error.text);
      errors.push(text.title);
    }
  }

  if (errors.length > 0) {
    res.status(422);
  }

  res.json({
    errors: { email: errors },
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
