import { FC, memo, useEffect, useRef } from 'react';
import { MediaVideoOrImage } from '@/components/Media/VideoOrImage';
import { useTimeline } from '@anton.bobrov/react-vevet-hooks';
import { useStoreLexicon } from '@/store/reducers/page';
import { IProps } from './types';
import styles from './styles.module.scss';

const Component: FC<IProps> = ({
  duration,
  isActive,
  index,
  onHidden,
  media,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { navigation: lexicon } = useStoreLexicon();

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
      {...media}
      ref={ref}
      className={styles.stories_frame_media}
      role="group"
      aria-roledescription="slide"
      aria-label={`${lexicon.slideNumber + (index + 1)}`}
      aria-hidden={!isActive}
    />
  );
};

export const StoriesFrameMedia = memo(Component);
