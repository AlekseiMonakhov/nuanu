import { forwardRef, memo, useEffect, useRef, useState } from 'react';
import { LazyImage, LazyVideo } from '@anton.bobrov/react-components';
import cn from 'classnames';
import { useForwardedRef } from '@anton.bobrov/react-hooks';
import { IProps } from './types';
import styles from './styles.module.scss';

const Component = forwardRef<HTMLDivElement, IProps>(
  (
    { className, style, image, video, onLoad, isPlaying = true, ...props },
    forwardedRef,
  ) => {
    const ref = useForwardedRef(forwardedRef);
    const videoRef = useRef<HTMLVideoElement>(null);

    const [isAutoPlay] = useState(isPlaying);

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
        className={cn(className, styles.media)}
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
            position="cover"
            autoPlay={isAutoPlay}
          />
        )}

        {image && <LazyImage paths={image} onLoad={onLoad} position="cover" />}
      </div>
    );
  },
);

Component.displayName = 'MediaVideoOrImage';

export const MediaVideoOrImage = memo(Component);
