import { ProgressHandler } from '@/utils/utils/ProgressHandler';
import { ReactElement } from 'react';

export interface IProps {
  children: ReactElement;
  index: number;
  handler: ProgressHandler | null;
  yParallax: number;
}
