import { SlideProgress } from '@anton.bobrov/vevet-init';
import { ReactElement } from 'react';

export interface IProps {
  children: ReactElement;
  index: number;
  length: number;
  handler: SlideProgress | null;
  yParallax: number;
}
