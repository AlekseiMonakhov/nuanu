import { layoutSlice } from '@/store/reducers/layout';
import store from '@/store/store';
import { onStoreValue } from '@/store/utils/onStoreValue';

type TCallback = () => Promise<void>;

export async function onRouterCurtainCycle(
  onShown: TCallback,
  onHidden: TCallback,
) {
  store.dispatch(layoutSlice.actions.setRouterCurtainState('show'));
  await onStoreValue((state) => state.layout.routerCurtainState === 'shown');

  await onShown();

  store.dispatch(layoutSlice.actions.setRouterCurtainState('hide'));
  await onStoreValue((state) => state.layout.routerCurtainState === 'hidden');

  await onHidden();
}
