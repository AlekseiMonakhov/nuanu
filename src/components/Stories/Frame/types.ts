import { IBaseComponent, TKey } from '@anton.bobrov/react-components';
import { ReactNode } from 'react';
import { IStories, IStoriesItem } from '../global';
import { TStoriesFrameDotsNavigationRenderer } from './DotsNavigation/types';

export interface IStoriesFrameProps<Item extends IStoriesItem>
  extends IStories<Item> {
  activeKey?: TKey;
  onActiveKey?: (key: TKey) => void;
  onPrev?: () => void;
  onNext?: () => void;
  renderDotsNavigation?: TStoriesFrameDotsNavigationRenderer;
  /** @default 250 */
  changeDuration?: number;
  /** @default false */
  hasAutoChange?: boolean;
  /** @default 5000 */
  autoChangeDuration?: number;
  /** @default false */
  hasOverlay?: boolean;
  /** @default false */
  isDisabled?: boolean;
  children?: ReactNode;
}

export interface IProps
  extends IStoriesFrameProps<IStoriesItem>,
    IBaseComponent {}
