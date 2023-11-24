import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { headerSlice } from './reducers/header';
import { pageSlice } from './reducers/page';
import { loadingSlice } from './reducers/loading';
import { layoutSlice } from './reducers/layout';
import { menuSlice } from './reducers/menu';
import { loadingMiddleware } from './middleware/loading';

const rootReducer = combineReducers({
  header: headerSlice.reducer,
  page: pageSlice.reducer,
  loading: loadingSlice.reducer,
  layout: layoutSlice.reducer,
  menu: menuSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [loadingMiddleware],
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

export type TAppState = ReturnType<typeof rootReducer>;
export type TAppDispatch = typeof store.dispatch;
