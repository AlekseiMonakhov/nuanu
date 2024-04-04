import { FC, memo, useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { TProps } from './types';
import styles from './styles.module.scss';

const Component: FC<TProps> = ({
  className,
  style,
  original,
  width,
  height,
  alt,
  onLoad,
  position = 'cover',
  sizes = '100vw',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Image
      {...props}
      className={cn(
        className,
        styles.image,
        isLoaded && styles.loaded,
        position && styles[`position_${position}`],
      )}
      style={style}
      src={original}
      width={width}
      height={height}
      alt={alt ?? original}
      sizes={sizes === 'none' ? undefined : sizes}
      quality={85}
      onLoad={(event) => {
        setIsLoaded(true);

        if (onLoad) {
          onLoad?.(event);
        }
      }}
    />
  );
};

Component.displayName = 'DynamicImage';

export const DynamicImage = memo(Component);
