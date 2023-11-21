import { IBaseComponent } from '@anton.bobrov/react-components';
import { ReactNode } from 'react';

export interface IProps extends IBaseComponent {
  content: ReactNode;
  media: ReactNode;
  stats: ReactNode;
  action: ReactNode;
}
