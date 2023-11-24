import { GetServerSidePropsContext } from 'next';
import store from '@/store/store';
import { pageSlice } from '@/store/reducers/page';
import { fetchSSP } from './fetch';

/**
 * Get server side props
 */
export async function getSSP(context: GetServerSidePropsContext) {
  const props = await fetchSSP(context);

  if ('page' in props && props.page) {
    const { page } = props;

    store.dispatch(pageSlice.actions.set(page.props));
  }

  return props;
}
