import { FC, useRef } from 'react';
import cn from 'classnames';
import { IProps } from './types';
import styles from './styles.module.scss';
import { useGoogleMaps } from './utils/useGoogleMaps';

export const GoogleMap: FC<IProps> = ({ className, style, lat, lng }) => {
  const ref = useRef<HTMLDivElement>(null);

  useGoogleMaps({ ref, lat, lng });

  return (
    <div ref={ref} className={cn(className, styles.google_map)} style={style} />
  );
};
