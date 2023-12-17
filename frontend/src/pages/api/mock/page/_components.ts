import type { NextApiRequest, NextApiResponse } from 'next';
import { GET_PAGE_GLOBAL } from '@/mock/PAGE_GLOBAL';
import { TPageTemplateRegistryAPI } from '@/templates/Renderer';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<TPageTemplateRegistryAPI>,
) => {
  const PAGE_GLOBAL = GET_PAGE_GLOBAL({
    req,
    templateName: '_LoremComponents',
  });

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
