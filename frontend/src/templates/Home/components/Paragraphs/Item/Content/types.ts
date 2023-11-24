import { IBaseComponent } from '@anton.bobrov/react-components';
import { ReactNode } from 'react';

export interface IContentProps {
  /** nl2br */
  title?: string;
  /** wysiwyg */
  description?: string;
}

export interface IProps extends IContentProps, IBaseComponent {
  children?: ReactNode;
}
