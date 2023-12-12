import { useEffect, useState } from 'react';
import { uniqueeArray, useEvent } from '@anton.bobrov/react-hooks';
import { TFormBaseSelectFullOption } from '../types';
import { useSelectedOptions } from './useSelectedOptions';

interface IProps {
  isOpened: boolean;
  value: string | undefined;
  options: TFormBaseSelectFullOption[];
  onChange: (value: string) => void;
  isMultiple?: boolean;
}

export function useListboxStates({
  isOpened,
  value,
  options,
  onChange,
  isMultiple,
}: IProps) {
  const [focusedOption, setFocusedOption] = useState<
    TFormBaseSelectFullOption | undefined
  >();

  const selectedOptions = useSelectedOptions({
    value,
    options,
  });

  const firstSelectedOption = selectedOptions[0];

  useEffect(() => {
    if (!isOpened) {
      return;
    }

    if (firstSelectedOption) {
      setFocusedOption(firstSelectedOption);

      return;
    }

    setFocusedOption(undefined);
  }, [isOpened, firstSelectedOption]);

  const excludeOptionKey = useEvent((key) => {
    onChange(
      selectedOptions
        .filter((option) => option.key !== key)
        .map((option) => option.key)
        .join(','),
    );
  });

  const addOptionKey = useEvent((key) => {
    onChange(
      uniqueeArray([...selectedOptions.map((option) => option.key), key]).join(
        ',',
      ),
    );
  });

  const toggleOptionKey = useEvent((optionKey: string) => {
    const isAlreadySelected = selectedOptions.find(
      (option) => option.key === optionKey,
    );

    if (isMultiple) {
      if (isAlreadySelected) {
        excludeOptionKey(optionKey);
      } else {
        addOptionKey(optionKey);
      }

      return;
    }

    onChange(optionKey);
  });

  return { focusedOption, setFocusedOption, toggleOptionKey };
}
