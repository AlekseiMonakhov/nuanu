import { IBaseComponent } from '@anton.bobrov/react-components';
import { ReactNode } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

export interface IFormInputbox extends IBaseComponent {
  children: ReactNode;
  id: string;
  label?: string;
  isError?: boolean;
  errorId: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}
