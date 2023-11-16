import { IBaseComponent } from '@anton.bobrov/react-components';
import { IContentItemProps } from './ContentItem/types';
import { IStories, IStoriesItem } from '../global';

export interface IStoriesFullScreenItem
  extends IStoriesItem,
    IContentItemProps {}

export interface IStoriesFullScreen extends IStories<IStoriesFullScreenItem> {}

export interface IProps extends IStoriesFullScreen, IBaseComponent {}
