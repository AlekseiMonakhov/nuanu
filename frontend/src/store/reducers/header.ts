import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { TAppState } from '../store';

type TTheme = 'dark' | 'light';

type TState = {
  theme: TTheme;
};

const initialState: TState = {
  theme: 'light',
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setTheme: (state, payload: PayloadAction<TTheme>) => ({
      ...state,
      theme: payload.payload,
    }),
    setDefaultTheme: (state) => ({
      ...state,
      theme: 'light',
    }),
  },
});

const select = (state: TAppState) => state.header;

export function useStoreHeader() {
  return useSelector(select);
}
