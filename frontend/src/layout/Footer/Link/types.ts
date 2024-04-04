import { AnchorHTMLAttributes } from 'react';

export interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}
