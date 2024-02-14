import { IBaseComponent } from '@anton.bobrov/react-components';

export type TSoundCloud = {
  id: string;
};

export interface IProps extends IBaseComponent, TSoundCloud {}
