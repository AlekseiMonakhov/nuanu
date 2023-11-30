import { isBrowser, useEvent, useScrollLock } from '@anton.bobrov/react-hooks';
import { useEffect } from 'react';
import styles from './styles.module.scss';

export function usePageScrollLock(isEnabledProp: boolean) {
  useScrollLock(isBrowser ? window : null, { isDisabled: !isEnabledProp });

  const toggleDocumentScrollLock = useEvent((isEnabled: boolean) => {
    document.documentElement.classList.toggle(styles.lock_scroll, isEnabled);
  });

  useEffect(() => {
    toggleDocumentScrollLock(isEnabledProp);

    return () => toggleDocumentScrollLock(false);
  }, [isEnabledProp, toggleDocumentScrollLock]);
}
