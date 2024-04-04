import { useEventListener } from '@anton.bobrov/react-hooks';
import { RefObject } from 'react';

interface IOnCallbackProps {
  emitterRef: RefObject<HTMLElement>;
  listboxRef: RefObject<HTMLElement>;
}

export interface IUseBaseNavigation {
  onOpen?: (props: IOnCallbackProps) => void;
  onClose?: (props: IOnCallbackProps) => void;
}

interface IProps extends IUseBaseNavigation {
  emitterRef: RefObject<HTMLElement>;
  listboxRef: RefObject<HTMLElement>;
  isOpened: boolean;
  setIsOpened: (isOpened: boolean) => void;
}

export function useBaseNavigation({
  emitterRef,
  listboxRef,
  isOpened,
  setIsOpened,
  onOpen,
  onClose,
}: IProps) {
  const open = () => {
    setIsOpened(true);
    onOpen?.({ emitterRef, listboxRef });
  };

  const close = () => {
    setIsOpened(false);
    onClose?.({ emitterRef, listboxRef });
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
      if (!emitterRef.current || !listboxRef.current) {
        return;
      }

      const isEmitter = emitterRef.current.contains(event?.target as Node);
      const isListbox = listboxRef.current?.contains(event?.target as Node);

      const isOutsideClick = !isEmitter && !isListbox;

      if (isOutsideClick && event.which === 1) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();

        close();
      }
    },
    isDisabled: !isOpened,
  });
}
