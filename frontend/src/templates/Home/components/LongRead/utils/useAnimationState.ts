import { SectionScrollProgress } from '@anton.bobrov/vevet-init';
import { RefObject, useEffect, useState } from 'react';

export function useAnimationState(ref: RefObject<HTMLElement>, length: number) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!ref.current) {
      return undefined;
    }

    const handler = new SectionScrollProgress({
      container: window,
      section: ref.current,
    });

    handler.addCallback('render', () => {
      const { progressMove } = handler;
      const step = 1 / (length - 1);

      const nearestIndex = Math.round(progressMove / step);
      setActiveIndex(nearestIndex);
    });

    return () => handler.destroy();
  }, [length, ref]);

  return { activeIndex };
}
