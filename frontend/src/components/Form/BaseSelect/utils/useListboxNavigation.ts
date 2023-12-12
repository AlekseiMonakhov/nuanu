import { RefObject } from 'react';
import {
  isNumber,
  useDebouncedProp,
  useEventListener,
} from '@anton.bobrov/react-hooks';
import { clamp } from '@anton.bobrov/vevet-init';
import { TFormBaseSelectFullOption } from '../types';

interface IProps {
  emitterRef: RefObject<HTMLElement>;
  isOpened: boolean;
  options: TFormBaseSelectFullOption[];
  onOptionFocus: (option: TFormBaseSelectFullOption) => void;
  focusedOption: TFormBaseSelectFullOption | undefined;
  onToggleOptionKey: (optionKey: string) => void;
}

export function useListboxNavigation({
  emitterRef,
  isOpened: isOpenedProp,
  options,
  onOptionFocus,
  focusedOption,
  onToggleOptionKey,
}: IProps) {
  const isOpened = useDebouncedProp(isOpenedProp, 0);

  const wrap = (step: number | 'first' | 'last') => {
    const activeIndex = options.findIndex(
      (option) => option.id === focusedOption?.id,
    );

    let nextIndex = 0;
    if (isNumber(step)) {
      nextIndex = clamp(activeIndex + step, [0, options.length - 1]);
    } else if (step === 'first') {
      nextIndex = 0;
    } else if (step === 'last') {
      nextIndex = options.length - 1;
    }

    onOptionFocus(options[nextIndex]);
  };

  const preventEvent = (event: KeyboardEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };

  useEventListener({
    ref: emitterRef,
    target: 'keydown',
    listener: (event) => {
      if (!isOpened) {
        return;
      }

      switch (event.key) {
        case 'ArrowUp':
          preventEvent(event);
          wrap(-1);
          break;

        case 'ArrowDown':
          preventEvent(event);
          wrap(1);
          break;

        case 'Home':
          preventEvent(event);
          wrap('first');
          break;

        case 'End':
          preventEvent(event);
          wrap('last');
          break;

        case 'Enter':
        case ' ':
          preventEvent(event);

          if (focusedOption) {
            onToggleOptionKey(focusedOption.key);
          }
          break;

        default:
          break;
      }
    },
  });
}
