import { isBrowser, useEventListener } from '@anton.bobrov/react-hooks';
import { normalizeWheel } from '@anton.bobrov/vevet-init';
import { useRef } from 'react';

interface IProps {
  isEnabled: boolean;
  isEnd: boolean;
  onWheel: (direction: -1 | 1) => void;
}

export function useWheel({ isEnabled, isEnd, onWheel }: IProps) {
  const valueRef = useRef(0);

  useEventListener({
    ref: isBrowser ? window : null,
    isDisabled: !isEnabled,
    target: 'wheel',
    listener: (event) => {
      if (isEnd && window.scrollY > 0) {
        return;
      }

      const { pixelY } = normalizeWheel(event);
      valueRef.current += pixelY;

      if (Math.abs(valueRef.current) > 100 && Math.abs(pixelY) > 10) {
        onWheel(valueRef.current > 0 ? 1 : -1);
        valueRef.current = 0;
      }
    },
  });
}
