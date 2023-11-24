import {
  useDebouncedEffect,
  useIsOnceMounted,
} from '@anton.bobrov/react-hooks';
import { useEffect } from 'react';
import { PCancelable } from '@anton.bobrov/vevet-init';
import { layoutSlice, useStoreLayout } from '@/store/reducers/layout';
import { useStoreMenu } from '@/store/reducers/menu';
import store from '@/store/store';

const isReadyToVisible = () =>
  new PCancelable<void>((resolve, reject) => {
    const blockingElements = document.querySelectorAll(
      '*[data-block-page-view]',
    );

    if (blockingElements.length > 0) {
      setTimeout(() => isReadyToVisible().then(resolve).catch(reject), 30);
    } else {
      resolve();
    }
  });

export function useTemplate() {
  const isMounted = useIsOnceMounted();

  const { isFirstLoaded, isPageVisible, routerCurtainState } = useStoreLayout();
  const { isAnimating: isMenuAnimating } = useStoreMenu();

  useEffect(() => {
    if (!isMounted) {
      return;
    }

    store.dispatch(layoutSlice.actions.setIsPageReady(true));
  }, [isMounted]);

  useDebouncedEffect(
    () => {
      if (
        !isFirstLoaded ||
        routerCurtainState !== 'hidden' ||
        isPageVisible ||
        isMenuAnimating
      ) {
        return undefined;
      }

      const promise = isReadyToVisible();
      promise
        .then(() => store.dispatch(layoutSlice.actions.setIsPageVisible(true)))
        .catch(() => {});

      return () => promise.cancel();
    },
    [isFirstLoaded, isMenuAnimating, isPageVisible, routerCurtainState],
    100,
  );
}
