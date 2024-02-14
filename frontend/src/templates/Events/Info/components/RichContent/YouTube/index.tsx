import { FC, useRef } from 'react';
import cn from 'classnames';
import { useOnLazyIntersection } from '@anton.bobrov/react-hooks';
import { IProps } from './types';
import styles from './styles.module.scss';

export const YouTube: FC<IProps> = ({ className, style, id }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { isIn } = useOnLazyIntersection({ ref });

  return (
    <div ref={ref} className={cn(className, styles.youtube)} style={style}>
      {isIn && (
        <iframe
          width="100"
          height="100"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      )}
    </div>
  );
};
