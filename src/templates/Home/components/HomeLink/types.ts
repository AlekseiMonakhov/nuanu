import { IBaseComponent } from '@anton.bobrov/react-components';

export interface IHomeLink {
  name: string;
  href: string;
  isExternal: boolean;
}

export interface IProps extends IHomeLink, IBaseComponent {}
