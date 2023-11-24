import { InputHTMLAttributes } from 'react';
import { Message, ValidateResult, ValidationRule } from 'react-hook-form';

export interface IFormBaseInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'required'> {
  name: string;
  validate?: (value: string) => ValidateResult;
  required?: Message | ValidationRule<boolean>;
}
