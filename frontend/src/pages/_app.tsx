import '@/styles/index.scss';
import 'src/router';
import localFont from 'next/font/local';
import type { AppProps } from 'next/app';
import { useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import { isBrowser, useEvent } from '@anton.bobrov/react-hooks';
import store from '@/store/store';
import { LayoutHead } from '@/layout/Head';
import { Layout } from '@/layout/Layout';
import { TemplateRenderer } from '@/templates/Renderer';
import { pageSlice } from '@/store/reducers/page';
import { TAppPage } from '@/types/Page';

const suisseIntlFont = localFont({
  variable: '--font-suisse-intl',
  src: [
    {
      path: '../assets/fonts/SuisseIntl/SuisseIntl-Regular.woff2',
      weight: 'normal',
    },
  ],
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  const props = pageProps as TAppPage;

  const isStoreUpdatedRef = useRef(false);
  const canRerenderPropsRef = useRef(false);

  const updateStore = useEvent(() => {
    if (props.page) {
      store.dispatch(pageSlice.actions.set(props.page));
      isStoreUpdatedRef.current = true;
    }
  });

  if (isBrowser && !isStoreUpdatedRef.current) {
    updateStore();
  }

  useEffect(() => {
    if (canRerenderPropsRef.current) {
      updateStore();
    }

    canRerenderPropsRef.current = true;
  }, [updateStore, props]);

  if ('statusCode' in props || Object.keys(props).length === 0) {
    return <Component />;
  }

  return (
    <Provider store={store}>
      <LayoutHead />

      <style jsx global>{`
        html {
          font-family: ${suisseIntlFont.style.fontFamily};
        }
      `}</style>

      <Layout>
        <TemplateRenderer>
          <Component />
        </TemplateRenderer>
      </Layout>
    </Provider>
  );
};

export default MyApp;
