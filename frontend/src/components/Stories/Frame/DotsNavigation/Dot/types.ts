import { IBaseComponent } from '@anton.bobrov/react-components';
import { ButtonHTMLAttributes } from 'react';
import { ISharedProps } from '../global';

type TButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onMouseEnter' | 'onMouseLeave'
>;

export interface IProps extends IBaseComponent, TButtonProps, ISharedProps {
  isActive: boolean;
  onAutoChangeEnd: () => void;
  onClick: () => void;
  index: number;
  isDisabled: boolean;
  label?: string | null;
}
