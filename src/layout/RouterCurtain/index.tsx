import { FC, useRef } from 'react';
import { useTimeline } from '@anton.bobrov/react-vevet-hooks';
import { useChange } from '@anton.bobrov/react-hooks';
import { layoutSlice, useStoreLayout } from '@/store/reducers/layout';
import store from '@/store/store';
import styles from './styles.module.scss';

export const RouterCurtain: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { routerCurtainState } = useStoreLayout();

  const { play, reverse, timeline } = useTimeline({
    duration: 200,
    onProgress: ({ easing, progress }) => {
      const element = ref.current;
      if (!element) {
        return;
      }

      element.style.opacity = `${easing}`;
      element.style.display = progress > 0 ? 'block' : 'none';

      if (progress === 1 && !timeline?.isReversed) {
        store.dispatch(layoutSlice.actions.setRouterCurtainState('shown'));
      } else if (progress === 0 && timeline?.isReversed) {
        store.dispatch(layoutSlice.actions.setRouterCurtainState('hidden'));
      }
    },
  });

  useChange(() => {
    if (routerCurtainState === 'show') {
      play();
    } else if (routerCurtainState === 'hide') {
      reverse();
    }
  }, routerCurtainState);

  return <div ref={ref} className={styles.layout_router_curtain} />;
};
