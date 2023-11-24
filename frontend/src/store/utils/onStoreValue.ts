import store, { TAppState } from '../store';

type TCallback = (state: TAppState) => boolean;

export function onStoreValue(callback: TCallback) {
  return new Promise<void>((resolve) => {
    if (callback(store.getState())) {
      resolve();

      return;
    }

    const subscribe = store.subscribe(() => {
      if (callback(store.getState())) {
        subscribe();
        resolve();
      }
    });
  });
}
