import { useEvent } from '@anton.bobrov/react-hooks';
import { SectionScrollProgress, clampScope } from '@anton.bobrov/vevet-init';
import { RefObject, useCallback, useEffect, useState } from 'react';

export type TOnProgressMove = (
  onRender: (progress: number) => void,
) => undefined | (() => void);

export function useAnimationState(ref: RefObject<HTMLElement>, length: number) {
  const [activeIndex, setActiveIndex] = useState(0);

  const [handler, setHandler] = useState<SectionScrollProgress | undefined>(
    undefined,
  );

  const getProgress = useEvent(() => {
    if (!handler) {
      return 0;
    }
    const { progressMove } = handler;

    return clampScope(progressMove, [0, 0.8]);
  });

  const onProgressMove: TOnProgressMove = useCallback(
    (onRender) => {
      if (!handler) {
        return undefined;
      }

      const callback = handler.addCallback('render', () => {
        const progress = getProgress();
        onRender(progress);
      });

      return () => callback.remove();
    },
    [getProgress, handler],
  );

  useEffect(() => {
    if (!ref.current) {
      return undefined;
    }

    const instance = new SectionScrollProgress({
      container: window,
      section: ref.current,
    });

    setHandler(instance);

    instance.addCallback('render', () => {
      const progress = getProgress();
      const step = 1 / (length - 1);

      const nearestIndex = Math.round(progress / step);
      setActiveIndex(nearestIndex);
    });

    return () => {
      setHandler(undefined);
      instance.destroy();
    };
  }, [getProgress, length, ref]);

  return { activeIndex, onProgressMove };
}
