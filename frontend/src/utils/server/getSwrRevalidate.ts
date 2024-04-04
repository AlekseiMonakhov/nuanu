import { isBoolean, isNumber } from '@anton.bobrov/react-hooks';
import { REVALIDATE } from 'settings';

export function getSwrRevalidate(value?: boolean | number) {
  if (isBoolean(value)) {
    return value ? REVALIDATE : 1;
  }

  if (isNumber(value)) {
    return value;
  }

  return REVALIDATE;
}
