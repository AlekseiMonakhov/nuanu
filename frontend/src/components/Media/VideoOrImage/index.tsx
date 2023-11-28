import { forwardRef, memo, useEffect, useRef, useState } from 'react';
import { LazyVideo } from '@anton.bobrov/react-components';
import cn from 'classnames';
import { useForwardedRef } from '@anton.bobrov/react-hooks';
import { IProps } from './types';
import styles from './styles.module.scss';
import { DynamicImage } from '../DynamicImage';

const Component = forwardRef<HTMLDivElement, IProps>(
  (
    {
      className,
      style,
      image,
      video,
      onLoad,
      isPlaying = true,
      placeholderTheme,
      position = 'cover',
      ...props
    },
    forwardedRef,
  ) => {
    const ref = useForwardedRef(forwardedRef);
    const videoRef = useRef<HTMLVideoElement>(null);

    const [isAutoPlay] = useState(isPlaying);

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      if (!videoRef.current) {
        return;
      }

      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }, [isPlaying]);

    return (
      <div
        ref={ref}
        className={cn(
          className,
          styles.media,
          isLoaded && styles.loaded,
          placeholderTheme && styles[`placeholder_${placeholderTheme}`],
        )}
        style={style}
        {...props}
      >
        {video && (
          <LazyVideo
            ref={videoRef}
            src={video}
            muted
            loop
            playsInline
            onLoadedMetadata={onLoad}
            position={position}
            autoPlay={isAutoPlay}
          />
        )}

        {image && (
          <DynamicImage
            {...image}
            onLoad={() => {
              setIsLoaded(true);
              onLoad?.();
            }}
            position={position}
          />
        )}
      </div>
    );
  },
);

Component.displayName = 'MediaVideoOrImage';

export const MediaVideoOrImage = memo(Component);
