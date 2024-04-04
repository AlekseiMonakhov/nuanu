import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { TAppState } from '../store';

type TState = {
  ids: string[];
};

const initialState: TState = {
  ids: [],
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    start: (state, payload: PayloadAction<string>) => ({
      ...state,
      ids: [...state.ids, payload.payload],
    }),
    end: (state, payload: PayloadAction<string>) => ({
      ...state,
      ids: state.ids.filter((id) => id !== payload.payload),
    }),
  },
});

const select = (state: TAppState) => state.loading;

export function useStoreLoading() {
  return useSelector(select);
}
