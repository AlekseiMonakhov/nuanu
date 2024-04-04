import { FC, useRef } from 'react';
import cn from 'classnames';
import { useOnLazyIntersection } from '@anton.bobrov/react-hooks';
import { IProps } from './types';
import styles from './styles.module.scss';

export const SoundCloud: FC<IProps> = ({ className, style, id }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { isIn } = useOnLazyIntersection({ ref });

  return (
    <div ref={ref} className={cn(className, styles.soundcloud)} style={style}>
      {isIn && (
        <iframe
          width="100%"
          height="166"
          allow="autoplay"
          src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${id}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
          title="Soundcloud"
        />
      )}
    </div>
  );
};
