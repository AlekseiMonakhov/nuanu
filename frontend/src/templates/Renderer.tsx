import { IPageAPI } from '@/types/Page';
import dynamic from 'next/dynamic';
import { FC, PropsWithChildren } from 'react';
import { useStorePage } from '@/store/reducers/page';
import { IHome } from './Home/types';
import { ILoremComponents } from './_LoremComponents/types';
import { INotFound } from './NotFound/types';

export type TPageTemplateRegistryAPI =
  | IPageAPI<'Home', IHome, true>
  | IPageAPI<'NotFound', INotFound, true>
  | IPageAPI<'_LoremComponents', ILoremComponents, true>;

const NotFound = dynamic(() => import('./NotFound'), {
  ssr: true,
});

const Home = dynamic(() => import('./Home'), {
  ssr: true,
});

const LoremComponents = dynamic(() => import('./_LoremComponents'), {
  ssr: true,
});

const Empty = dynamic(() => import('./Empty'), {
  ssr: true,
});

export const TemplateRenderer: FC<PropsWithChildren> = () => {
  const props = useStorePage();
  const apiProps = props as TPageTemplateRegistryAPI;

  const { key } = props;

  switch (apiProps.templateName) {
    case 'Home':
      return <Home key={key} {...apiProps.template} />;

    case 'NotFound':
      return <NotFound key={key} {...apiProps.template} />;

    case '_LoremComponents':
      return <LoremComponents key={key} {...apiProps.template} />;

    default:
      return <Empty key={key} {...(apiProps as any)?.template} />;
  }
};
