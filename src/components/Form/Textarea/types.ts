import { TextareaHTMLAttributes } from 'react';
import { ValidateResult } from 'react-hook-form';
import { IFormInputbox } from '../Box/types';

export interface IFormTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    Pick<IFormInputbox, 'label'> {
  name: string;
  validate?: (value: string) => ValidateResult;
}
