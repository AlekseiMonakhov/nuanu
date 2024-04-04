import { IBaseComponent } from '@anton.bobrov/react-components';

export type TText = {
  /** wysiwyg */
  text: string;
};

export interface IProps extends IBaseComponent, TText {}
