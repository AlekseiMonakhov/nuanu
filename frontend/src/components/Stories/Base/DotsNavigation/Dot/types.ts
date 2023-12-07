import { IBaseComponent } from '@anton.bobrov/react-components';
import { ButtonHTMLAttributes } from 'react';
import { useProgressHandler } from '../../utils/useProgressHandler';

type TButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onMouseEnter' | 'onMouseLeave'
>;

export interface IProps extends IBaseComponent, TButtonProps {
  index: number;
  label: string | null;
  isActive: boolean;
  onClick: () => void;
  progressHandler: ReturnType<typeof useProgressHandler> | null;
  isDisabled: boolean;
}
