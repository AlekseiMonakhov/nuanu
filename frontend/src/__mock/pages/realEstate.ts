import { TPageTemplateRegistryAPI } from '@/templates/Renderer';
import { MOCK_GET_PAGE_GLOBAL } from '../GET_PAGE_GLOBAL';

export function MOCK_PAGES_REAL_ESTATE(
  path: string,
): TPageTemplateRegistryAPI {
  const PAGE_GLOBAL = MOCK_GET_PAGE_GLOBAL({
    templateName: 'RealEstate',
    path,
  });

  return {
    global: PAGE_GLOBAL,

    templateName: 'RealEstate',

    template: {},
  };
}
