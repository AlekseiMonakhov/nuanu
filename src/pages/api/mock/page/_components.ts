import type { NextApiRequest, NextApiResponse } from 'next';
import { PAGE_GLOBAL } from '@/mock/PAGE_GLOBAL';
import { TPageTemplateRegistryAPI } from '@/templates/Renderer';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<TPageTemplateRegistryAPI>,
) => {
  res.json({
    global: {
      ...PAGE_GLOBAL,
      meta: {
        ...PAGE_GLOBAL.meta,
        pagetitle: 'Components',
      },
      breadcrumbs: [
        ...PAGE_GLOBAL.breadcrumbs,
        { id: 1, href: '/_components', name: 'Components' },
      ],
    },

    templateName: '_LoremComponents',

    template: {},
  });
};
export default handler;
