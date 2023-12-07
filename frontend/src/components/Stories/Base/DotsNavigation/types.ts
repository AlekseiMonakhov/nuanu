import { IBaseComponent, TKey } from '@anton.bobrov/react-components';
import { ReactNode } from 'react';
import { IStoriesBaseItem } from '../global';
import { useProgressHandler } from '../utils/useProgressHandler';

export interface IProps extends IBaseComponent {
  items: IStoriesBaseItem[];
  isDisabled: boolean;
  activeKey: TKey;
  onActiveKey: (key: TKey) => void;
  onPrev: () => void;
  onNext: () => void;
  onDotHover?: (key: TKey | null) => void;
  progressHandler: ReturnType<typeof useProgressHandler> | null;
  controllableId: string;
  children?: ReactNode;
}
