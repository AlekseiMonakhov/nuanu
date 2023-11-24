import {
  isBrowser,
  useEvent,
  useEventListener,
} from '@anton.bobrov/react-hooks';
import { useEffect } from 'react';

export function usePageScrollLock(
  isEnabledProp: boolean,
  lockScrollClassName: string,
) {
  // TODO: replace hook with one from react-kit (new release)
  useEventListener({
    ref: isBrowser ? window : null,
    target: 'scroll',
    listener: () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    },
    isDisabled: !isEnabledProp,
  });

  const toggleDocumentScrollLock = useEvent((isEnabled: boolean) => {
    document.documentElement.classList.toggle(lockScrollClassName, isEnabled);
  });

  useEffect(() => {
    toggleDocumentScrollLock(isEnabledProp);

    return () => toggleDocumentScrollLock(false);
  }, [isEnabledProp, toggleDocumentScrollLock]);
}
