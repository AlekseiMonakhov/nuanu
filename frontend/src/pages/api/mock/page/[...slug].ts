import type { NextApiRequest, NextApiResponse } from 'next';
import { PAGE_GLOBAL } from '@/mock/PAGE_GLOBAL';
import { TPageTemplateRegistryAPI } from '@/templates/Renderer';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<TPageTemplateRegistryAPI>,
) => {
  res.status(404).json({
    global: {
      ...PAGE_GLOBAL,
      meta: {
        ...PAGE_GLOBAL.meta,
        pagetitle: 'Page Not Found',
      },
    },

    templateName: 'NotFound',

    template: {},
  });
};
export default handler;
