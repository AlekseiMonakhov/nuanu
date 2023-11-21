import { IBaseComponent } from '@anton.bobrov/react-components';
import { IHomeParagraphsItem } from './Item/types';

export interface IHomeParagraphsProps {
  items: IHomeParagraphsItem[];
}

export interface IProps extends IBaseComponent, IHomeParagraphsProps {}
