import store from '@/store/store';
import { pageSlice } from '@/store/reducers/page';
import { fetchPageProps } from './fetch/fetchPageProps';

interface IProps {
  path: string;
  locale?: string;
}

/**
 * Get page props
 */
export async function getPageProps({ path, locale }: IProps) {
  const props = await fetchPageProps({ path, locale });

  store.dispatch(pageSlice.actions.set(props));

  return {
    page: props,
  };
}
