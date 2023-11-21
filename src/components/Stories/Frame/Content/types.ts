import { TActionButtonRendererAction } from '@/components/Button/Action/types';
import { IBaseComponent } from '@anton.bobrov/react-components';

type TTheme = 'dark' | 'light';

export interface IStoriesFrameContentProps {
  theme?: TTheme;
  /** nl2br */
  label?: string | null;
  action?: TActionButtonRendererAction | null;
}

export interface IProps extends IStoriesFrameContentProps, IBaseComponent {
  isActive: boolean;
  isHovered: boolean;
  index: number;
}
