import { IFormBaseInputProps } from '@/components/Form/BaseInput/types';
import { ReactElement } from 'react';

export interface IProps extends IFormBaseInputProps {
  children: ReactElement;
}
