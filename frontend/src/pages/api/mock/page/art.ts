import type { NextApiRequest, NextApiResponse } from 'next';
import { GET_PAGE_GLOBAL } from '@/mock/PAGE_GLOBAL';
import { TPageTemplateRegistryAPI } from '@/templates/Renderer';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<TPageTemplateRegistryAPI>,
) => {
  const PAGE_GLOBAL = GET_PAGE_GLOBAL({ req, templateName: 'Art' });

  res.json({
    global: PAGE_GLOBAL,

    templateName: 'Art',

    template: {},
  });
};

export default handler;
