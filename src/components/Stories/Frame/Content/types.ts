import { IBaseComponent, IVideoPlayer } from '@anton.bobrov/react-components';

type TCTA =
  | { kind: 'link'; href: string; target?: '_blank' | null; text: string }
  | { kind: 'video_modal'; player: IVideoPlayer; duration?: string };

type TTheme = 'dark' | 'light';

export interface IStoriesFrameContentActionProps {
  action: TCTA;
  theme: TTheme;
}

export interface IStoriesFrameContentProps {
  contentTheme?: TTheme;
  /** nl2br */
  label?: string | null;
  action?: TCTA | null;
}

export interface IProps extends IStoriesFrameContentProps, IBaseComponent {
  isActive: boolean;
  isHovered: boolean;
  index: number;
}
