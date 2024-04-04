import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { TAppState } from '../store';

type TData = {
  url: string | null;
  scrollTop: number;
  object: any;
};

type TState = {
  hasHistory: boolean;
  data: TData | null;
};

const initialState: TState = {
  hasHistory: false,
  data: null,
};

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setHasHistory: (state, payload: PayloadAction<boolean>) => ({
      ...state,
      hasHistory: payload.payload,
    }),
    update: (state, payload: PayloadAction<TData>) => ({
      ...state,
      data: payload.payload,
    }),
    reset: (state) => ({
      ...state,
      hasHistory: false,
      data: null,
    }),
  },
});

const select = (state: TAppState) => state.history;

export function useStoreHistory() {
  return useSelector(select);
}
