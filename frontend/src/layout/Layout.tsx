import { FC, PropsWithChildren } from 'react';
import {
  LinkClickInterceptor,
  PageScroll,
  TLinkClickInterceptorHandler,
} from '@anton.bobrov/react-components';
import { useRouter } from 'next/router';
import { useEvent } from '@anton.bobrov/react-hooks';
import { useStoreLayout } from '@/store/reducers/layout';
import { BreadcrumbsJSON } from './Breadcrumbs/JSON';
import { Preloader } from './Preloader';
import { Header } from './Header';
import { RouterCurtain } from './RouterCurtain';
import { Cookies } from './Cookies';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { key, isPageReady } = useStoreLayout();

  const router = useRouter();

  const onInternalLinkClick: TLinkClickInterceptorHandler = useEvent(
    (event, element) => {
      if (event.defaultPrevented) {
        return;
      }

      event.preventDefault();
      router.push(element.href, element.href);
    },
  );

  return (
    <LinkClickInterceptor onInternalClick={onInternalLinkClick}>
      <PageScroll.Provider canBeSmooth={false}>
        <PageScroll.ScrollBar resizeKey={isPageReady ? key : undefined}>
          <Preloader />

          <BreadcrumbsJSON />
          <Header />

          {children}

          <Cookies />

          <RouterCurtain />
        </PageScroll.ScrollBar>
      </PageScroll.Provider>
    </LinkClickInterceptor>
  );
};
