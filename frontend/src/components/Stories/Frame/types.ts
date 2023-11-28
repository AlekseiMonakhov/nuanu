import { IBaseComponent } from '@anton.bobrov/react-components';
import { IStoriesBase, IStoriesBaseItem } from '../Base/global';

export interface IStoriesFrameItem extends IStoriesBaseItem {
  /** nl2br */
  title?: string;
}

export interface IStoriesFrame extends IStoriesBase<IStoriesFrameItem> {}

export interface IProps extends IStoriesFrame, IBaseComponent {}
