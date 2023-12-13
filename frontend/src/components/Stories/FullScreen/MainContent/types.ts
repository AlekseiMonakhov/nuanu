import { IUseAnimationProps } from './utils/useAnimation';

export interface IMainContentProps {
  /** nl2br */
  title?: string;
  /** wysiwyg */
  description?: string | null;
}

export interface IProps extends IMainContentProps, IUseAnimationProps {
  index: number;
}
