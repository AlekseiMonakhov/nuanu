import { IUseAnimationProps } from './utils/useAnimation';

export interface IContentItemProps {
  /** nl2br */
  title?: string;
  /** wysiwyg */
  description?: string;
}

export interface IProps extends IContentItemProps, IUseAnimationProps {
  index: number;
}
