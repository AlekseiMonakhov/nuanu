import { TActionButtonAction } from '@/components/Button/Action/types';
import { IBaseComponent } from '@anton.bobrov/react-components';

type TTheme = 'dark' | 'light';

export interface IDotsContentProps {
  theme?: TTheme;
  /** nl2br */
  label?: string | null;
  action?: TActionButtonAction | null;
}

export interface IProps extends IDotsContentProps, IBaseComponent {
  isActive: boolean;
  isHovered: boolean;
  index: number;
}
