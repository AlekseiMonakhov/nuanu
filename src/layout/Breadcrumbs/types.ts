import { TKey } from '@anton.bobrov/react-components';

export interface IBreadcrumb {
  id: TKey;
  href: string;
  name: string;
}

export type TBreadcrumbs = IBreadcrumb[];
