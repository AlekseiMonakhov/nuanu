import { IBaseComponent, TKey } from '@anton.bobrov/react-components';
import { ReactNode } from 'react';
import { IStoriesBaseItem } from '../global';

export interface IProps extends IBaseComponent {
  items: IStoriesBaseItem[];
  activeKey: TKey;
  onActiveKey: (key: TKey) => void;
  onPrev: () => void;
  onNext: () => void;
  hasAutoChange: boolean;
  autoChangeTimeout: number;
  controllableId: string;
  isDisabled: boolean;
  onDotHover?: (key: TKey | null) => void;
  children?: ReactNode;
}
