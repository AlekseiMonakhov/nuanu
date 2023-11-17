import { ILink } from '@/types/Link';
import { ReactNode } from 'react';

export interface IProps {
  title: string;
  links: ILink[];
  target?: '_blank';
  children?: ReactNode;
}
