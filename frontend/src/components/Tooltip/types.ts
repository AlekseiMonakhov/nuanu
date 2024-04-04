import { IBaseComponent } from '@anton.bobrov/react-components';
import { ReactElement } from 'react';

export interface IProps extends IBaseComponent {
  tagName: 'div' | 'span';
  text: string;
  children: ReactElement;
}
