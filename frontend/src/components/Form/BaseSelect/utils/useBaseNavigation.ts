import { useEventListener } from '@anton.bobrov/react-hooks';
import { RefObject } from 'react';

interface IProps {
  emitterRef: RefObject<HTMLElement>;
  isOpened: boolean;
  setIsOpened: (isOpened: boolean) => void;
  onOpen?: () => void;
  onClose?: () => void;
}

export function useBaseNavigation({
  emitterRef,
  isOpened,
  setIsOpened,
  onOpen,
  onClose,
}: IProps) {
  const open = () => {
    setIsOpened(true);
    onOpen?.();
  };

  const close = () => {
    setIsOpened(false);
    onClose?.();
  };

  const toggle = () => {
    if (isOpened) {
      close();
    } else {
      open();
    }
  };

  useEventListener({
    ref: emitterRef,
    target: 'click',
    listener: () => toggle(),
  });

  useEventListener({
    ref: emitterRef,
    target: 'keydown',
    listener: (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        event.stopPropagation();

        toggle();

        return;
      }

      if (!isOpened && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
        event.preventDefault();
        event.stopPropagation();

        open();

        return;
      }

      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();

        close();
      }
    },
  });

  useEventListener({
    ref: typeof document !== 'undefined' ? document : null,
    target: 'click',
    listener: (event) => {
      const element = emitterRef.current;
      if (!element) {
        return;
      }

      if (!element.contains(event?.target as Node) && event.which === 1) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();

        close();
      }
    },
    isDisabled: !isOpened,
  });
}
