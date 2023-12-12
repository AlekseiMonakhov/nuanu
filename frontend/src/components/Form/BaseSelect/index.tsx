/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, useId, useRef } from 'react';
import cn from 'classnames';
import { usePropState } from '@anton.bobrov/react-hooks';
import { IFormBaseSelectProps } from './types';
import styles from './styles.module.scss';
import { usePlaceholder } from './utils/usePlaceholder';
import { useBaseNavigation } from './utils/useBaseNavigation';
import { useFullOptions } from './utils/useFullOptions';
import { useListboxStates } from './utils/useListboxStates';
import { useSelectedOptions } from './utils/useSelectedOptions';
import { useListboxNavigation } from './utils/useListboxNavigation';

export const FormBaseSelect: FC<IFormBaseSelectProps> = ({
  className,
  style,
  placeholder: defaultPlaceholder,
  value,
  onChange,
  options: optionsProp,
  isMultiple,
  isOpened: isOpenedProp,
  onOpen,
  onClose,
}) => {
  const id = useId();
  const menuId = useId();

  const emitterRef = useRef<HTMLDivElement>(null);

  const options = useFullOptions(optionsProp);

  const [isOpened, setIsOpened] = usePropState(isOpenedProp ?? false);

  const { placeholder, isEmpty } = usePlaceholder({
    defaultPlaceholder,
    value,
    options,
  });

  useBaseNavigation({ emitterRef, isOpened, setIsOpened, onOpen, onClose });

  const selectedOption = useSelectedOptions({ value, options });

  const { focusedOption, setFocusedOption, toggleOptionKey } = useListboxStates(
    {
      isOpened,
      value,
      options,
      onChange,
      isMultiple,
    },
  );

  useListboxNavigation({
    emitterRef,
    isOpened,
    options,
    onOptionFocus: setFocusedOption,
    focusedOption,
    onToggleOptionKey: toggleOptionKey,
  });

  return (
    <div className={cn(className, styles.base_select)} style={style}>
      <div
        ref={emitterRef}
        className={cn(styles.thumb, !isEmpty && styles.active)}
        id={id}
        tabIndex={0}
        aria-controls={menuId}
        aria-expanded={isOpened}
        aria-haspopup="listbox"
        aria-label={defaultPlaceholder}
        role="combobox"
        aria-activedescendant={
          isOpened && focusedOption ? focusedOption.id : undefined
        }
      >
        <span className={styles.placeholder}>{placeholder}</span>
      </div>

      <div
        className={cn(styles.options, isOpened && styles.is_opened)}
        id={menuId}
        role="listbox"
        aria-label={placeholder}
      >
        {options.map((option) => {
          const isSelected = !!selectedOption.find(
            (item) => item.key === option.key,
          );

          return (
            <div
              key={option.key}
              className={cn(
                styles.option,
                focusedOption?.id === option.id && styles.aria_active,
                isSelected && styles.active,
              )}
              id={option.id}
              role="option"
              aria-selected={isSelected}
              onClick={() => toggleOptionKey(option.key)}
            >
              {option.value}
            </div>
          );
        })}
      </div>
    </div>
  );
};
