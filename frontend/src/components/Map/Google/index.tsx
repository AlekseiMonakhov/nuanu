import { FC } from 'react';
import cn from 'classnames';
import { IProps } from './types';
import styles from './styles.module.scss';

export const GoogleMap: FC<IProps> = ({ className, style }) => (
  <div className={cn(className, styles.google_map)} style={style} />
);
