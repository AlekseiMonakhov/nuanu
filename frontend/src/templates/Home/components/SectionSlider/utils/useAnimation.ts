import { Callbacks, NCallbacks, clamp } from '@anton.bobrov/vevet-init';
import { RefObject, useEffect, useState } from 'react';
import { useEvent } from '@anton.bobrov/react-hooks';
import store from '@/store/store';
import { layoutSlice } from '@/store/reducers/layout';
import { usePageScrollLock } from './usePageScrollLock';
import { useWheel } from './useWheel';
import { useSync } from './useSync';
import { useDrag } from './useDrag';

interface IProps {
  ref: RefObject<HTMLElement>;
  belowRef: RefObject<HTMLElement>;
  length: number;
}

interface ICallbacks extends NCallbacks.ITypes {
  render: { progress: number };
}

type TCallbacks = Callbacks<ICallbacks>;

export interface IUseAnimation {
  callbacks: TCallbacks | null;
  length: number;
  isEnd: boolean;
  targetProgress: number;
}

export function useAnimation({ ref, belowRef, length }: IProps): IUseAnimation {
  const min = 0;
  const max = length;

  const [targetProgress, setTargetProgress] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [callbacks, setCallbacks] = useState<TCallbacks | null>(null);

  // end callbacks
  useEffect(() => {
    if (isEnd) {
      store.dispatch(layoutSlice.actions.refreshScrollBar());
    }
  }, [isEnd]);

  // render end
  const renderEnd = useEvent((progress: number) => {
    const container = ref.current;
    const below = belowRef.current;
    if (!container || !below) {
      return;
    }

    const endProgress = clamp(progress - length + 1, [0, 1]);

    container.style.transform = `translate(0, ${endProgress * -100}%)`;
    below.style.opacity = `${endProgress}`;

    setIsEnd(endProgress === 1);
  });

  // render scene
  const render = useEvent((progress: number) => {
    // launch callbacks
    callbacks?.tbt('render', { progress });

    // render end
    renderEnd(progress);
  });

  // sync progress
  const { isAnimating } = useSync({
    value: targetProgress,
    onRender: (progress) => render(progress),
  });

  // create callbacks
  useEffect(() => {
    const instance = new Callbacks<ICallbacks>();
    setCallbacks(instance);

    return instance.destroy();
  }, []);

  // lock scroll
  usePageScrollLock(!isEnd);

  // add wheel
  useWheel({
    isEnabled: !isAnimating,
    isEnd,
    onWheel: (direction) => {
      setTargetProgress((val) => clamp(val + direction, [min, max]));
    },
  });

  // add drag
  useDrag({
    isEnabled: !isAnimating,
    isEnd,
    onDrag: (direction) => {
      setTargetProgress((val) => clamp(val + direction, [min, max]));
    },
  });

  return { callbacks, length, isEnd, targetProgress };
}
