import { FC } from 'react';
import cn from 'classnames';
import { DynamicImage } from '@/components/Media/DynamicImage';
import { IProps } from './types';
import styles from './styles.module.scss';

export const Poster: FC<IProps> = ({ className, style, ...props }) => (
  <div className={cn(className, styles.poster)} style={style}>
    <DynamicImage {...props} position={false} sizes="none" />
  </div>
);
