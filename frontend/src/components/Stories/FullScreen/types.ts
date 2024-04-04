import { IBaseComponent } from '@anton.bobrov/react-components';
import { IStoriesBase, IStoriesBaseItem } from '../Base/global';
import { IDotsContentProps } from './DotsContent/types';
import { IMainContentProps } from './MainContent/types';

export interface IStoriesFullScreenItem
  extends IStoriesBaseItem,
    IDotsContentProps,
    IMainContentProps {}

export interface IStoriesFullScreen
  extends IStoriesBase<IStoriesFullScreenItem> {}

export interface IProps extends IStoriesFullScreen, IBaseComponent {}
