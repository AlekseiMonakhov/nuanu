import { ReactElement } from 'react';
import { IUseAnimation } from '../utils/useAnimation';

export interface IProps extends Pick<IUseAnimation, 'callbacks' | 'length'> {
  index: number;
  children: ReactElement;
}
