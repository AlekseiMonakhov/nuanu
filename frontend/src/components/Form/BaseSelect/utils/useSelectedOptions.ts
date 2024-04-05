import { TFormBaseSelectFullOption } from '../types';

interface IProps {
  value: string | undefined;
  options: TFormBaseSelectFullOption[];
}

export function useSelectedOptions({ value, options }: IProps) {
  const selectedKeys = value?.split(',');

  const selectedOptions = options.filter(
    (option) =>
      selectedKeys?.includes(option.key),
  );

  return selectedOptions;
}
