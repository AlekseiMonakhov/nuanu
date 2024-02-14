import { IBaseComponent } from '@anton.bobrov/react-components';

export type TYouTube = {
  id: string;
};

export interface IProps extends IBaseComponent, TYouTube {}
