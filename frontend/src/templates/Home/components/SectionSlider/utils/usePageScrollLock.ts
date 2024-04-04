import { isBrowser, useEvent, useScrollLock } from '@anton.bobrov/react-hooks';
import { useEffect } from 'react';
import styles from './styles.module.scss';

export function usePageScrollLock(isLocked: boolean) {
  useScrollLock(isBrowser ? window : null, { isDisabled: !isLocked });

  const toggleDocumentScrollLock = useEvent((isEnabled: boolean) => {
    document.documentElement.classList.toggle(styles.lock_scroll, isEnabled);
  });

  useEffect(() => {
    toggleDocumentScrollLock(isLocked);

    return () => toggleDocumentScrollLock(false);
  }, [isLocked, toggleDocumentScrollLock]);
}
