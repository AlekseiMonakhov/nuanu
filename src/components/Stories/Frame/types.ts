import { IMediaVideoOrImageProps } from '@/components/Media/VideoOrImage/types';
import { IBaseComponent, TKey } from '@anton.bobrov/react-components';
import { CSSProperties, ReactElement, ReactNode, RefObject } from 'react';
import { IStoriesContentProps } from './Content/types';

export interface IStoriesFrameItem
  extends IMediaVideoOrImageProps,
    IStoriesContentProps {
  key: TKey;
}

export interface IStoriesFrame {
  items: IStoriesFrameItem[];
}

export interface IStoriesFrameProps extends IStoriesFrame {
  activeKey?: TKey;
  onActiveKey?: (key: TKey) => void;
  changeDuration?: number;
  eventsEmitterRef?: RefObject<HTMLElement>;
  hasAutoChange?: boolean;
  autoChangeDuration?: number;
  renderNavigation?: TStoriesFrameNavigationRenderer;
  hasOverlay?: boolean;
}

export interface IStoriesFrameNavigationRendererProps {
  items: IStoriesFrameItem[];
  activeKey: TKey;
  onActiveKey: (key: TKey) => void;
  hasAutoChange: boolean;
  autoChangeDuration: number;
  onDotHover: (key: TKey | null) => void;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export type TStoriesFrameNavigationRenderer = (
  props: IStoriesFrameNavigationRendererProps,
) => ReactElement;

export interface IProps extends IStoriesFrameProps, IBaseComponent {}
