import { FC, memo, useEffect, useRef } from 'react';
import { useTimeline } from '@anton.bobrov/react-vevet-hooks';
import { useStoreLexicon } from '@/store/reducers/page';
import { IProps } from './types';
import styles from './styles.module.scss';
import { Image } from './Image';
import { Video } from './Video';

const Component: FC<IProps> = ({
  index,
  media,
  progressDuration,
  isActive,
  onProgress,
  hasProgress,
  isProgressEnabled,
}) => {
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
    <div
      ref={ref}
      className={styles.stories_base_media}
      role="group"
      aria-roledescription="slide"
      aria-label={`${lexicon.slideNumber + (index + 1)}`}
      aria-hidden={!isActive}
    >
      {media?.image && (
        <Image
          isActive={isActive}
          progressDuration={progressDuration}
          priority={index === 0}
          onProgress={onProgress}
          hasProgress={hasProgress}
          isProgressEnabled={isProgressEnabled}
          {...media.image}
          alt={media.image.alt}
        />
      )}

      {media?.video && (
        <Video
          isActive={isActive}
          src={media.video}
          onProgress={onProgress}
          hasProgress={hasProgress}
          isProgressEnabled={isProgressEnabled}
          isLoop={!hasProgress}
        />
      )}
    </div>
  );
};

export const StoriesBaseMedia = memo(Component);
