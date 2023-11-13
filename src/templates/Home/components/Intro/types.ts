import { IBaseComponent } from '@anton.bobrov/react-components';

export interface IHomeIntro {
  /** nl2br */
  title: string;
  /** wysiwyg */
  description: string;
}

export interface IProps extends IHomeIntro, IBaseComponent {}
