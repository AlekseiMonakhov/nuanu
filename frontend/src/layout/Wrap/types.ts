import { IBaseComponent } from '@anton.bobrov/react-components';
import { HTMLAttributes } from 'react';

export interface IProps extends HTMLAttributes<HTMLDivElement>, IBaseComponent {
  variant?: 1;
}
