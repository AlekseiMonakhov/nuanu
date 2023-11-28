import { isBrowser, useEvent, useScrollLock } from '@anton.bobrov/react-hooks';
import { useEffect } from 'react';

export function usePageScrollLock(
  isEnabledProp: boolean,
  lockScrollClassName: string,
) {
  useScrollLock(isBrowser ? window : null, { isDisabled: !isEnabledProp });

  const toggleDocumentScrollLock = useEvent((isEnabled: boolean) => {
    document.documentElement.classList.toggle(lockScrollClassName, isEnabled);
  });

  useEffect(() => {
    toggleDocumentScrollLock(isEnabledProp);

    return () => toggleDocumentScrollLock(false);
  }, [isEnabledProp, toggleDocumentScrollLock]);
}
