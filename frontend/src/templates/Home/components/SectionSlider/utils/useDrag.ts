import { DraggerMove, vevet } from '@anton.bobrov/vevet-init';
import { useEffect, useRef } from 'react';

interface IProps {
  isEnabled: boolean;
  isEnd: boolean;
  onDrag: (direction: -1 | 1) => void;
}

export function useDrag({ isEnabled, isEnd, onDrag }: IProps) {
  const valueRef = useRef(0);

  useEffect(() => {
    if (!vevet.isMobile) {
      return undefined;
    }

    if (!isEnabled) {
      valueRef.current = 0;

      return undefined;
    }

    const dragger = new DraggerMove({
      container: window,
    });

    dragger.addCallback('move', ({ step }) => {
      if (isEnd && window.scrollY > 0) {
        return;
      }

      valueRef.current -= step.y;

      if (Math.abs(valueRef.current) > 100) {
        onDrag(valueRef.current > 0 ? 1 : -1);
        valueRef.current = 0;
      }
    });

    return () => dragger.destroy();
  }, [isEnabled, isEnd, onDrag]);
}
