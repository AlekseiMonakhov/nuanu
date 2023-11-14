import { forwardRef, memo } from 'react';
import { LazyImage, LazyVideo } from '@anton.bobrov/react-components';
import cn from 'classnames';
import { useForwardedRef } from '@anton.bobrov/react-hooks';
import { IProps } from './types';
import styles from './styles.module.scss';

const Component = forwardRef<HTMLDivElement, IProps>(
  ({ className, style, image, video, onLoad, ...props }, forwardedRef) => {
    const ref = useForwardedRef(forwardedRef);

    return (
      <div
        ref={ref}
        className={cn(className, styles.media)}
        style={style}
        {...props}
      >
        {video && (
          <LazyVideo
            src={video}
            autoPlay
            muted
            loop
            playsInline
            onLoadedMetadata={onLoad}
            position="cover"
          />
        )}

        {image && <LazyImage paths={image} onLoad={onLoad} position="cover" />}
      </div>
    );
  },
);

Component.displayName = 'MediaVideoOrImage';

export const MediaVideoOrImage = memo(Component);
