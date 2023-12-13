import { useId, useMemo } from 'react';
import { TFormBaseSelectFullOption, TFormBaseSelectOption } from '../types';

export function useFullOptions(
  optionsProp: TFormBaseSelectOption[],
): TFormBaseSelectFullOption[] {
  const id = useId();

  const options = useMemo(
    () =>
      optionsProp.map((option, index) => ({
        ...option,
        id: `${id}-option-${index}`,
      })),
    [id, optionsProp],
  );

  return options;
}
