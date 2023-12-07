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
  progress: null | number;
  controllableId: string;
  isDisabled: boolean;
}
