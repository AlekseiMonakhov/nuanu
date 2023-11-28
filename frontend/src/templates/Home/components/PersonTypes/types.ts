import { IBaseComponent } from '@anton.bobrov/react-components';
import { ISlideProps } from './Slide/types';

export interface IHomePersonTypesProps {
  /** nl2br */
  title?: string;
  items?: ISlideProps[];
}

export interface IProps extends IBaseComponent, IHomePersonTypesProps {}
