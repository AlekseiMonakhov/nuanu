import { FC, memo, useRef } from 'react';
import { DynamicImage } from '@/components/Media/DynamicImage';
import cn from 'classnames';
import { IProps } from './types';
import styles from './styles.module.scss';
import { useDrag } from './utils/useDrag';

const Component: FC<IProps> = ({
  datGuiName,
  src,
  width,
  height,
  alt,
  overlay,
  isDraggable,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const draggableSceneRef = useRef<HTMLDivElement>(null);

  useDrag({
    name: datGuiName,
    containerRef,
    draggableSceneRef,
    sourceWidth: width,
    sourceHeight: height,
    isDraggable,
  });

  return (
    <div ref={containerRef} className={styles.image_map}>
      <div
        ref={draggableSceneRef}
        className={cn(styles.draggable_scene, isDraggable && styles.draggable)}
      >
        <DynamicImage
          original={src}
          width={width}
          height={height}
          alt={alt}
          draggable={false}
        />

        <div className={styles.overlay}>{overlay}</div>
      </div>
    </div>
  );
};

export const HomeImageMap = memo(Component);
