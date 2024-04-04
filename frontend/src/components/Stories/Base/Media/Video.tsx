import { FC, useEffect, useState } from 'react';
import { useEvent } from '@anton.bobrov/react-hooks';
import { LazyVideo, requestVideoPlay } from '@anton.bobrov/react-components';
import { TVideoProps } from './types';

export const Video: FC<TVideoProps> = ({
  isActive,
  onProgress: onProgressProp,
  hasProgress,
  isProgressEnabled,
  src,
  isLoop,
}) => {
  const [ref, setRef] = useState<HTMLVideoElement | null>(null);

  const onProgress = useEvent(onProgressProp);

  useEffect(() => {
    if (!ref) {
      return undefined;
    }

    // auto play when progress not used
    if (!hasProgress) {
      const promise = requestVideoPlay(ref);

      return () => promise.cancel();
    }

    // logic for progress

    if (!isActive) {
      ref.pause();
      onProgress(0);

      return undefined;
    }

    if (!isProgressEnabled) {
      ref.pause();

      return undefined;
    }

    ref.currentTime = 0;
    const promise = requestVideoPlay(ref);

    return () => promise.cancel();
  }, [hasProgress, isActive, isProgressEnabled, onProgress, ref]);

  return (
    <LazyVideo
      ref={setRef}
      src={src}
      muted
      loop={isLoop}
      playsInline
      position="cover"
      onTimeUpdate={(event) => {
        const progress =
          event.currentTarget.currentTime / event.currentTarget.duration;

        if (hasProgress && isProgressEnabled && progress < 1) {
          onProgress(
            event.currentTarget.currentTime / event.currentTarget.duration,
          );
        }
      }}
      onEnded={() => onProgress(1)}
    />
  );
};
