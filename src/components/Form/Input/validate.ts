import { HTMLInputTypeAttribute } from 'react';
import { ValidateResult } from 'react-hook-form';
import emailValidator from 'email-validator';

export function validateInputValueByType(
  value: string,
  type: HTMLInputTypeAttribute,
): ValidateResult {
  if (value === '') {
    return true;
  }

  if (type === 'email') {
    return emailValidator.validate(value);
  }

  return true;
}
