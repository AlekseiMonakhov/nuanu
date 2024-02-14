import { IBaseComponent } from '@anton.bobrov/react-components';
import { ReactNode } from 'react';

export interface IProps extends IBaseComponent {
  title: string;
  value?: string;
  href?: string;
  children?: ReactNode;
}
