import '@/styles/index.scss';
import 'src/router';
import type { AppProps } from 'next/app';
import { useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import { isBrowser, useEvent } from '@anton.bobrov/react-hooks';
import { IAppPage } from '@/types/Page';
import store from '@/store/store';
import { LayoutHead } from '@/layout/Head';
import { Layout } from '@/layout/Layout';
import { TemplateRenderer } from '@/templates/Renderer';
import { pageSlice } from '@/store/reducers/page';

type TStaticProps = {
  statusCode: number;
};

type TAppProps = IAppPage | TStaticProps;

const MyApp = ({ Component, pageProps }: AppProps) => {
  const withStaticProps = pageProps as TAppProps;

  const isStoreUpdatedRef = useRef(false);
  const canRerenderPropsRef = useRef(false);

  const updateStore = useEvent(() => {
    if ('page' in withStaticProps && withStaticProps.page) {
      store.dispatch(pageSlice.actions.set(withStaticProps.page.props));
      isStoreUpdatedRef.current = true;
    }
  });

  if (isBrowser && !isStoreUpdatedRef.current) {
    if (!('statusCode' in withStaticProps)) {
      updateStore();
    }
  }

  useEffect(() => {
    if (canRerenderPropsRef.current) {
      if (!('statusCode' in withStaticProps)) {
        updateStore();
      }
    }

    canRerenderPropsRef.current = true;
  }, [updateStore, withStaticProps]);

  if ('statusCode' in withStaticProps) {
    return <h1>{withStaticProps.statusCode}</h1>;
  }

  if (withStaticProps.page) {
    return (
      <Provider store={store}>
        <LayoutHead />

        <Layout>
          <TemplateRenderer>
            <Component />
          </TemplateRenderer>
        </Layout>
      </Provider>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Ooops</h1>

      <br />

      {withStaticProps.error && (
        <>
          {withStaticProps.error.name && (
            <div>{withStaticProps.error.name}</div>
          )}

          <br />

          {withStaticProps.error.body ? (
            <pre>{withStaticProps.error.body}</pre>
          ) : (
            ''
          )}
        </>
      )}
    </div>
  );
};

export default MyApp;
