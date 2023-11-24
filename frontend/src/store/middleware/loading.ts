import { Middleware } from '@reduxjs/toolkit';
import { isBrowser } from '@anton.bobrov/react-hooks';
import { TAppState } from '../store';

export const loadingMiddleware: Middleware<{}, TAppState> =
  (storeAPI) => (next) => (action) => {
    const result = next(action);
    const state = storeAPI.getState();

    const isLoading =
      state.loading.ids.length > 0 || state.layout.isPageLoading;

    if (isBrowser) {
      document.documentElement.classList.toggle('is-loading', isLoading);
    }

    return result;
  };
