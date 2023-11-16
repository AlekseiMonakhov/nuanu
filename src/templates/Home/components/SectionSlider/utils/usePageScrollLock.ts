import { isBrowser, useEventListener } from '@anton.bobrov/react-hooks';
import { RefObject } from 'react';

export function usePageScrollLock(
  containerRef: RefObject<HTMLElement>,
  isEnabled: boolean,
) {
  useEventListener({
    ref: isBrowser ? window : null,
    target: 'wheel',
    listener: (event) => {
      event.preventDefault();
    },
    isDisabled: !isEnabled,
    options: {
      passive: false,
    },
  });

  useEventListener({
    ref: isBrowser ? window : null,
    target: 'scroll',
    listener: () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    },
    isDisabled: !isEnabled,
  });
}
