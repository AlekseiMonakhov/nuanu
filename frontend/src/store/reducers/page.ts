import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { IPage } from '@/types/Page';
import { TAppState } from '../store';

type TState = IPage<any, any>;

const initialState: TState = {} as TState;

export const pageSlice = createSlice({
  name: 'pageProps',
  initialState,
  reducers: {
    set(state, action: PayloadAction<TState>) {
      return action.payload;
    },
  },
});

const selectPage = (state: TAppState) => state.page;

export function useStorePage() {
  return useSelector(selectPage);
}

const selectGlobal = (state: TAppState) => state.page.global;

export function useStoreGlobal() {
  return useSelector(selectGlobal);
}

const selectLexicon = (state: TAppState) => state.page.lexicon;

export function useStoreLexicon() {
  return useSelector(selectLexicon);
}

const selectUrl = (state: TAppState) => state.page.url;

export function useStoreUrl() {
  return useSelector(selectUrl);
}
