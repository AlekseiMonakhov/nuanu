import { IBaseComponent } from '@anton.bobrov/react-components';
import { IStoriesFrameProps } from '../Frame/types';

export interface IProps
  extends Omit<IStoriesFrameProps, 'renderNavigation'>,
    IBaseComponent {}
