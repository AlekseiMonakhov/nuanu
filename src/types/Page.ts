import { TBreadcrumbs } from '@/layout/Breadcrumbs/types';
import { ILexicon } from '@/lexicon/types';
import { DeepRequired } from 'ts-essentials';
import { TKey } from '@anton.bobrov/react-components';
import { ILink, ILinkMenu, ILinksLanguage } from './Link';

/** Global page props */
export interface IPageGlobal {
  lang: string;
  dir: 'ltr' | 'rtl';
  meta: {
    pagetitle: string;
    description?: string;
    keywords?: string;
    image?: string;
    searchable?: boolean;
  };
  links: {
    home: string;
  };
  languages: ILinksLanguage[];
  menu: ILinkMenu[];
  breadcrumbs: TBreadcrumbs;
  social: ILink[];
}

/** Page props for API */
export interface IPageAPI<
  N extends string,
  T extends Record<string, any>,
  TemplateRequired extends boolean = false,
> {
  global: IPageGlobal;
  templateName: N;
  template: TemplateRequired extends true ? DeepRequired<T> : T;
}

/** Page Props */
export interface IPage<N extends string, T extends Record<string, any>>
  extends IPageAPI<N, T> {
  key: TKey;
  lexicon: ILexicon;
  url: {
    base: string;
    href: string;
    canonical: string;
  };
}

/** Page APP Props */
export interface IAppPage {
  page?: {
    props: IPage<any, any>;
  };
  error?: {
    name?: string;
    body?: string;
  };
}
