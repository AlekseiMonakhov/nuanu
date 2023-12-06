import { IBaseComponent, TKey } from '@anton.bobrov/react-components';
import { ReactNode } from 'react';
import { IStoriesBaseItem } from '../global';

export interface IProps extends IBaseComponent {
  items: IStoriesBaseItem[];
  isDisabled: boolean;
  activeKey: TKey;
  onActiveKey: (key: TKey) => void;
  onPrev: () => void;
  onNext: () => void;
  onDotHover?: (key: TKey | null) => void;
  progress: number | null;
  controllableId: string;
  children?: ReactNode;
}
