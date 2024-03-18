import { TPageTemplateRegistryAPI } from '@/templates/Renderer';
import { MOCK_GET_PAGE_GLOBAL } from '../GET_PAGE_GLOBAL';

export function MOCK_PAGES_NOT_FOUND(path: string): TPageTemplateRegistryAPI {
  const PAGE_GLOBAL = MOCK_GET_PAGE_GLOBAL({
    templateName: 'NotFound',
    path,
  });

  return {
    global: {
      ...PAGE_GLOBAL,
      meta: {
        ...PAGE_GLOBAL.meta,
        pagetitle: 'Page Not Found',
      },
    },

    templateName: 'NotFound',

    template: {},
  };
}
