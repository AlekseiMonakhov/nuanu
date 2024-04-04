import { TPageScrollSelector } from '@anton.bobrov/react-components';
import { FieldValues, FormProps, UseFormReturn } from 'react-hook-form';

export interface IFormResponse {
  errors?: Record<string, string | string[]>;
}

export interface IFormProps<
  T extends FieldValues,
  U extends FieldValues | undefined = undefined,
> extends Omit<
    FormProps<T, U>,
    'control' | 'onSubmit' | 'onSuccess' | 'onError'
  > {
  form: UseFormReturn;
  action: string;
  onSuccess?: (data: any) => void;
  onError?: (response: IFormResponse) => void;
  resetOnSuccess?: boolean;
  scrollToError?: boolean;
  scrollSelector?: TPageScrollSelector;
}
