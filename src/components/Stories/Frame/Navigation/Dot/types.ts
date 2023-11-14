import { IBaseComponent } from '@anton.bobrov/react-components';
import { ButtonHTMLAttributes } from 'react';

export interface IProps
  extends IBaseComponent,
    Pick<
      ButtonHTMLAttributes<HTMLButtonElement>,
      'onMouseEnter' | 'onMouseLeave'
    > {
  isActive: boolean;
  duration: number;
  hasAnimation: boolean;
  onEnd: () => void;
  onClick: () => void;
  index: number;
  label?: string | null;
}
