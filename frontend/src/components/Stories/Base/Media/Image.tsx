import { FC, useEffect } from 'react';
import { DynamicImage } from '@/components/Media/DynamicImage';
import { Timeline } from '@anton.bobrov/vevet-init';
import { useEvent } from '@anton.bobrov/react-hooks';
import { TImageProps } from './types';

export const Image: FC<TImageProps> = ({
  isActive,
  priority,
  hasProgress,
  progressDuration,
  onProgress: onProgressProp,
  isProgressEnabled,
  ...image
}) => {
  const onProgress = useEvent(onProgressProp);

  useEffect(() => {
    if (!hasProgress || !isProgressEnabled) {
      return undefined;
    }

    if (!isActive) {
      onProgress(0);

      return undefined;
    }

    onProgress(0);

    const tm = new Timeline({ duration: progressDuration });
    tm.addCallback('progress', ({ progress }) => onProgress(progress));
    tm.play();

    return () => tm.destroy();
  }, [hasProgress, isActive, isProgressEnabled, onProgress, progressDuration]);

  return <DynamicImage {...image} priority={priority} draggable={false} />;
};
