import Router from 'next/router';
import { isBrowser } from '@anton.bobrov/react-hooks';
import { NCallbacks, Callbacks } from '@anton.bobrov/vevet-init';
import { layoutSlice } from './store/reducers/layout';
import store from './store/store';
import { onRouterCurtainCycle } from './layout/RouterCurtain/onRouterCurtainCycle';
import { onStoreValue } from './store/utils/onStoreValue';

interface ICallbackTypes extends NCallbacks.ITypes {
  push: false;
  updated: false;
}

// disable scroll restoration
if (isBrowser) {
  window.history.scrollRestoration = 'manual';
}

/**
 * Callback on router change
 */
export const routerCallbacks = (
  isBrowser ? new Callbacks<ICallbackTypes>() : undefined
) as Callbacks<ICallbackTypes>;

// override router
(function override() {
  if (!isBrowser) {
    return;
  }

  // catch router
  const { router } = Router;
  if (!router) {
    setTimeout(() => override(), 30);

    return;
  }

  // Override .onPopState() listener
  window.removeEventListener('popstate', router.onPopState);
  window.addEventListener('popstate', () => {
    router.push(window.location.href, window.location.href);
  });

  // override .push()
  const pushFunc = router.push.bind(router);

  router.push = async (...arg: Parameters<typeof pushFunc>) => {
    if (store.getState().layout.isPageLoading) {
      throw new Error('Page is already loading');
    }

    store.dispatch(layoutSlice.actions.setIsPageLoading(true));
    routerCallbacks.tbt('push', false);

    let isLoadResult = false;

    await onRouterCurtainCycle(
      async () => {
        store.dispatch(layoutSlice.actions.setIsPageVisible(false));
        store.dispatch(layoutSlice.actions.setIsPageReady(false));

        isLoadResult = await pushFunc(...arg);

        await onStoreValue((state) => state.layout.isPageReady);
      },
      async () => {
        store.dispatch(layoutSlice.actions.setIsPageLoading(false));
        routerCallbacks.tbt('updated', false);
      },
    );

    return isLoadResult;
  };
})();
