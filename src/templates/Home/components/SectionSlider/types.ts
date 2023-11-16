import { IBaseComponent } from '@anton.bobrov/react-components';
import { ReactElement } from 'react';

export interface IProps extends IBaseComponent {
  names: string[];
  onEndProgress: (progress: number) => void;
  children: (ReactElement | undefined)[];
}
