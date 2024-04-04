import { IPageAPI } from '@/types/Page';
import dynamic from 'next/dynamic';
import { FC, PropsWithChildren, useState } from 'react';
import { useStorePage } from '@/store/reducers/page';
import { useChange } from '@anton.bobrov/react-hooks';
import store from '@/store/store';
import { layoutSlice } from '@/store/reducers/layout';
import { IHome } from './Home/types';
import { ILoremComponents } from './_LoremComponents/types';
import { INotFound } from './NotFound/types';
import { IEvents } from './Events/Index/types';
import { IAccommodation } from './Accommodation/types';
import { IArt } from './Art/types';
import { IExperience } from './Experience/types';
import { IEventsInfo } from './Events/Info/types';

export type TPageTemplateRegistryAPI =
  | IPageAPI<'Home', IHome, true>
  | IPageAPI<'Events/Index', IEvents, true>
  | IPageAPI<'Events/Info', IEventsInfo, true>
  | IPageAPI<'Accommodation', IAccommodation, true>
  | IPageAPI<'Art', IArt, true>
  | IPageAPI<'Experience', IExperience, true>
  | IPageAPI<'NotFound', INotFound, true>
  | IPageAPI<'_LoremComponents', ILoremComponents, true>;

const NotFound = dynamic(() => import('./NotFound'), {
  ssr: true,
});

const Home = dynamic(() => import('./Home'), {
  ssr: true,
});

const EventsIndex = dynamic(() => import('./Events/Index'), {
  ssr: true,
});

const EventsInfo = dynamic(() => import('./Events/Info'), {
  ssr: true,
});

const Accommodation = dynamic(() => import('./Accommodation'), {
  ssr: true,
});

const Art = dynamic(() => import('./Art'), {
  ssr: true,
});

const Experience = dynamic(() => import('./Experience'), {
  ssr: true,
});

const LoremComponents = dynamic(() => import('./_LoremComponents'), {
  ssr: true,
});

const Empty = dynamic(() => import('./Empty'), {
  ssr: true,
});

export const TemplateRenderer: FC<PropsWithChildren> = () => {
  const props = useStorePage() as TPageTemplateRegistryAPI;

  const [state, setState] = useState({
    key: +new Date(),
    ...props,
  });

  useChange(() => {
    const key = +new Date();

    store.dispatch(layoutSlice.actions.setKey(key));
    setState({
      ...props,
      key,
    });
  }, props);

  const { key, ...apiProps } = state;

  switch (apiProps.templateName) {
    case 'Home':
      return <Home key={key} {...apiProps.template} />;

    case 'Events/Index':
      return <EventsIndex key={key} {...apiProps.template} />;

    case 'Events/Info':
      return <EventsInfo key={key} {...apiProps.template} />;

    case 'Accommodation':
      return <Accommodation key={key} {...apiProps.template} />;

    case 'Art':
      return <Art key={key} {...apiProps.template} />;

    case 'Experience':
      return <Experience key={key} {...apiProps.template} />;

    case 'NotFound':
      return <NotFound key={key} {...apiProps.template} />;

    case '_LoremComponents':
      return <LoremComponents key={key} {...apiProps.template} />;

    default:
      return <Empty key={key} {...(apiProps as any)?.template} />;
  }
};
