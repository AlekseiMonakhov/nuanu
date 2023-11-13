import { HTMLAttributes } from 'react';

export type TVariant = 1 | 2 | 3 | 4 | 5 | 6;

export interface IProps extends HTMLAttributes<HTMLHeadingElement> {
  variant: TVariant;
  as?: false | TVariant;
}
