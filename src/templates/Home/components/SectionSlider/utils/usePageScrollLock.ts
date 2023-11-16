import { isBrowser, useEventListener } from '@anton.bobrov/react-hooks';
import { useEffect } from 'react';

export function usePageScrollLock(
  isEnabled: boolean,
  lockScrollClassName: string,
) {
  useEventListener({
    ref: isBrowser ? window : null,
    target: 'scroll',
    listener: () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    },
    isDisabled: !isEnabled,
  });

  useEffect(() => {
    document.documentElement.classList.toggle(lockScrollClassName, isEnabled);
  }, [isEnabled, lockScrollClassName]);
}
