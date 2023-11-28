import { IBaseComponent } from '@anton.bobrov/react-components';
import { ButtonHTMLAttributes } from 'react';

type TButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onMouseEnter' | 'onMouseLeave'
>;

export interface IProps extends IBaseComponent, TButtonProps {
  index: number;
  isActive: boolean;
  onClick: () => void;
  hasAutoChange: boolean;
  autoChangeTimeout: number;
  controllableId: string;
  onAutoChangeEnd: () => void;
  isDisabled: boolean;
}
