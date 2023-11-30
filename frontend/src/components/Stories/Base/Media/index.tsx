import { FC, memo, useEffect, useRef } from 'react';
import { MediaVideoOrImage } from '@/components/Media/VideoOrImage';
import { useTimeline } from '@anton.bobrov/react-vevet-hooks';
import { useStoreLexicon } from '@/store/reducers/page';
import { IProps } from './types';
import styles from './styles.module.scss';

const Component: FC<IProps> = ({ isActive, index, media }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { navigation: lexicon } = useStoreLexicon();

  const { play, reverse } = useTimeline({
    duration: 250,
    onProgress({ easing }) {
      if (!ref.current) {
        return;
      }

      ref.current.style.opacity = `${easing}`;
    },
  });

  useEffect(() => {
    if (isActive) {
      play();

      return;
    }

    reverse();
  }, [isActive, play, reverse]);

  return (
    <MediaVideoOrImage
      {...media}
      ref={ref}
      className={styles.stories_base_media}
      priority={index === 0}
      role="group"
      aria-roledescription="slide"
      aria-label={`${lexicon.slideNumber + (index + 1)}`}
      aria-hidden={!isActive}
      draggable={false}
    />
  );
};

export const StoriesBaseMedia = memo(Component);