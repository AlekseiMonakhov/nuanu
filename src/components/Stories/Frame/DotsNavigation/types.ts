import { IBaseComponent, TKey } from '@anton.bobrov/react-components';
import { ReactElement, ReactNode } from 'react';
import { IStoriesItem } from '../../global';
import { ISharedProps } from './global';

export interface IStoriesFrameDotsNavigationRendererProps
  extends IBaseComponent,
    ISharedProps {
  items: IStoriesItem[];
  activeKey: TKey;
  onActiveKey: (key: TKey) => void;
  onDotHover: (key: TKey | null) => void;
  onPrev: () => void;
  onNext: () => void;
  isDisabled: boolean;
  children?: ReactNode;
}

export type TStoriesFrameDotsNavigationRenderer = (
  props: IStoriesFrameDotsNavigationRendererProps,
) => ReactElement;
