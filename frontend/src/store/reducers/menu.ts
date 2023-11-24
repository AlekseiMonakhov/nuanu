import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { TAppState } from '../store';

type TState = {
  isOpened: boolean;
  isAnimating: boolean;
};

const initialState: TState = {
  isOpened: false,
  isAnimating: false,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    open: (state) => ({
      ...state,
      isOpened: true,
    }),
    close: (state) => ({
      ...state,
      isOpened: false,
    }),
    toggle: (state) => ({
      ...state,
      isOpened: !state.isOpened,
    }),
    setIsAnimating: (state, { payload }: PayloadAction<boolean>) => ({
      ...state,
      isAnimating: payload,
    }),
  },
});

const select = (state: TAppState) => state.menu;

export function useStoreMenu() {
  return useSelector(select);
}
