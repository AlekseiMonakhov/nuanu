import { TBreadcrumbs } from '@/layout/Breadcrumbs/types';
import { DeepRequired } from 'ts-essentials';
import { ILexicon } from '@/lexicon/types';
import { ILink, ILinkMenu, ILinksLanguage } from './Link';

export type TPageCTA = {
  href: string;
  name: string;
};

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
    swr?: number | boolean;
  };
  links: {
    home: string;
    events: string;
    privacyPolicy: string;
  };
  languages: ILinksLanguage[];
  menu: ILinkMenu[];
  breadcrumbs: TBreadcrumbs;
  social: ILink[];
  cta: TPageCTA | null;
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
  lexicon: ILexicon;
  url: {
    base: string;
    href: string;
    canonical: string;
  };
}

export type TPage = IPageAPI<any, any> & {
  lexicon: ILexicon;
  url: {
    base: string;
    canonical: string;
  };
};

/** Page Props */
export type TAppPage = {
  page?: TPage;
};
