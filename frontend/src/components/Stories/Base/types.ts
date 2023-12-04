import { IBaseComponent, TKey } from '@anton.bobrov/react-components';
import { ReactNode } from 'react';
import { IStoriesBase } from './global';

export interface IStoriesBaseProps extends IStoriesBase {
  activeKey?: TKey;
  onActiveKey?: (key: TKey) => void;
  onPrev?: () => void;
  onNext?: () => void;
  /** @default false */
  hasAutoChange?: boolean;
  /** @default 10000 */
  autoChangeTimeout?: number;
  /** @default false */
  hasOverlay?: boolean;
  /** @default false */
  isDisabled?: boolean;
  children?: ReactNode;
  dotsNavigationClassName?: string;
  dotsNavigationChildren?: ReactNode;
  onDotHover?: (key: TKey | null) => void;
}

export interface IProps extends IStoriesBaseProps, IBaseComponent {}
