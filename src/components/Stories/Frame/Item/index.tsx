import { FC, useEffect, useRef } from 'react';
import { MediaVideoOrImage } from '@/components/Media/VideoOrImage';
import { useTimeline } from '@anton.bobrov/react-vevet-hooks';
import cn from 'classnames';
import { IProps } from './types';
import styles from './styles.module.scss';

export const StoriesItem: FC<IProps> = ({
  className,
  style,
  duration,
  isActive,
  onHidden,
  image,
  video,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { play, reverse } = useTimeline({
    duration,
    onProgress({ progress, easing }) {
      if (!ref.current) {
        return;
      }

      ref.current.style.opacity = `${easing}`;

      if (progress === 0 && !isActive) {
        onHidden();
      }
    },
  });

  useEffect(() => {
    if (isActive) {
      play();

      return;
    }

    reverse();
  }, [duration, isActive, play, reverse]);

  return (
    <MediaVideoOrImage
      ref={ref}
      className={cn(className, styles.item)}
      style={style}
      aria-hidden={!isActive}
      image={image}
      video={video}
    />
  );
};
