import { TPageTemplateRegistryAPI } from '@/templates/Renderer';
import { MOCK_GET_PAGE_GLOBAL } from '../GET_PAGE_GLOBAL';

export function MOCK_PAGES_COMPONENTS(path: string): TPageTemplateRegistryAPI {
  const PAGE_GLOBAL = MOCK_GET_PAGE_GLOBAL({
    templateName: '_LoremComponents',
    path,
  });

  return {
    global: {
      ...PAGE_GLOBAL,
      meta: {
        ...PAGE_GLOBAL.meta,
        pagetitle: 'Components',
        swr: 3600 * 24 * 365,
      },
      breadcrumbs: [
        ...PAGE_GLOBAL.breadcrumbs,
        { id: 1, href: '/_components', name: 'Components' },
      ],
    },

    templateName: '_LoremComponents',

    template: {},
  };
}
