import { menuSlice, useStoreMenu } from '@/store/reducers/menu';
import store from '@/store/store';
import { useOnRouterPush } from '@/utils/hooks/useOnRouterPush';
import { useEvent } from '@anton.bobrov/react-hooks';
import { useTimeline } from '@anton.bobrov/react-vevet-hooks';
import { useEffect } from 'react';

interface IProps {
  duration: number;
  onProgress: (progress: number) => void;
}

export function useMenuStates({ duration, onProgress }: IProps) {
  const { isOpened } = useStoreMenu();

  const render = useEvent((progress: number) => {
    onProgress(progress);
  });

  const setAnimating = (bool: boolean) =>
    store.dispatch(menuSlice.actions.setIsAnimating(bool));

  const { play, reverse, timeline } = useTimeline({
    duration,
    onProgress: ({ easing }) => render(easing),
  });

  // launch animation & update states
  useEffect(() => {
    const menuProgress = timeline?.progress ?? 0;

    if (isOpened) {
      play();

      setAnimating(true);

      timeline?.callbacks.add('end', () => setAnimating(false), {
        isOnce: true,
      });

      return;
    }

    if (menuProgress > 0) {
      reverse();

      setAnimating(true);

      const callback = timeline?.callbacks.add('progress', ({ progress }) => {
        if (progress === 0) {
          setAnimating(false);
          callback?.remove();
        }
      });
    }
  }, [isOpened, play, reverse, timeline?.callbacks, timeline?.progress]);

  useOnRouterPush(() => store.dispatch(menuSlice.actions.close()));

  return { isOpened };
}
