import { ReactNode } from 'react';

export interface IContentProps {
  /** nl2br */
  title?: string;
  /** wysiwyg */
  description?: string;
}

export interface IProps extends IContentProps {
  children?: ReactNode;
}
