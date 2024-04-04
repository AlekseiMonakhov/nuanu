import { TDynamicImageProps } from '@/components/Media/DynamicImage/types';
import { IBaseComponent } from '@anton.bobrov/react-components';

export type TPoster = TDynamicImageProps;

export interface IProps extends IBaseComponent, TPoster {}
