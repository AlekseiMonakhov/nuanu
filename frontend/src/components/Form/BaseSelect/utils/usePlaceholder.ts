import { useMemo } from 'react';
import { TFormBaseSelectFullOption } from '../types';
import { useSelectedOptions } from './useSelectedOptions';

interface IProps {
  defaultPlaceholder: string;
  counterPostfix: string;
  value: string | undefined;
  options: TFormBaseSelectFullOption[];
}

export function usePlaceholder({
  defaultPlaceholder,
  counterPostfix,
  value,
  options,
}: IProps) {
  const selectedOptions = useSelectedOptions({ value, options });

  const placeholder = useMemo(() => {
    if (selectedOptions.length === 0) {
      return defaultPlaceholder;
    }

    if (selectedOptions.length === 1) {
      return selectedOptions[0].value;
    }

    return `${selectedOptions.length} ${counterPostfix}`;
  }, [defaultPlaceholder, selectedOptions, counterPostfix]);

  return { placeholder, isEmpty: selectedOptions.length === 0 };
}