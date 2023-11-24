import { IVideoPlayer } from '@anton.bobrov/react-components';
import { ReactElement } from 'react';

type TLink = {
  kind: 'link';
  text: string;
  href: string;
  target?: '_blank' | null;
};

type TVideoModal = {
  kind: 'video_modal';
  text: string;
  player: IVideoPlayer;
  duration?: string;
};

export type TActionButtonAction = TLink | TVideoModal;

export interface IActionButtonRendererProps {
  text: string;
  sup?: string;
  tag: 'a' | 'button';
  type?: 'submit' | 'button' | 'reset';
  href?: string;
  target?: '_blank' | null;
  rel?: string;
}

export type TActionButtonRenderer = (
  props: IActionButtonRendererProps,
) => ReactElement | null;

export interface IProps {
  action: TActionButtonAction;
  renderButton: TActionButtonRenderer;
  buttonProps?: any;
}
