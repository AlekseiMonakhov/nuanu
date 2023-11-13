import { IBaseComponent } from '@anton.bobrov/react-components';
import { ReactNode } from 'react';

export interface IHomeAbout {
  /** wysiwyg */
  description: string;
}

export interface IProps extends IHomeAbout, IBaseComponent {
  children?: ReactNode;
}
