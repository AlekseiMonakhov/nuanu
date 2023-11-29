import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { TKey } from '@anton.bobrov/react-components';
import { TAppState } from '../store';

type TRouterCurtainState = 'show' | 'hide' | 'shown' | 'hidden';

type TState = {
  key: TKey;
  isFirstLoaded: boolean;
  isPageLoading: boolean;
  isPageReady: boolean;
  isPageVisible: boolean;
  routerCurtainState: TRouterCurtainState;
};

const initialState: TState = {
  key: 0,
  isFirstLoaded: false,
  isPageLoading: false,
  isPageReady: false,
  isPageVisible: false,
  routerCurtainState: 'hidden',
};

export const layoutSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setKey: (state, payload: PayloadAction<TKey>) => ({
      ...state,
      key: payload.payload,
    }),
    setIsFirstLoaded: (state) => ({
      ...state,
      isFirstLoaded: true,
    }),
    setIsPageLoading: (state, payload: PayloadAction<boolean>) => ({
      ...state,
      isPageLoading: payload.payload,
    }),
    setIsPageReady: (state, payload: PayloadAction<boolean>) => ({
      ...state,
      isPageReady: payload.payload,
    }),
    setIsPageVisible: (state, payload: PayloadAction<boolean>) => ({
      ...state,
      isPageVisible: payload.payload,
    }),
    setRouterCurtainState: (
      state,
      payload: PayloadAction<TRouterCurtainState>,
    ) => ({
      ...state,
      routerCurtainState: payload.payload,
    }),
  },
});

const select = (state: TAppState) => state.layout;

export function useStoreLayout() {
  return useSelector(select);
}
