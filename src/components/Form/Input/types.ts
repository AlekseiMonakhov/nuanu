import { InputHTMLAttributes } from 'react';
import { Message, ValidateResult, ValidationRule } from 'react-hook-form';
import { IFormInputbox } from '../Box/types';

export interface IFormInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'required'>,
    Pick<IFormInputbox, 'label'> {
  name: string;
  validate?: (value: string) => ValidateResult;
  required?: Message | ValidationRule<boolean>;
}
