import { FC, memo, useRef } from 'react';
import Image from 'next/image';
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
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const draggableSceneRef = useRef<HTMLDivElement>(null);

  useDrag({
    name: datGuiName,
    containerRef,
    draggableSceneRef,
    sourceWidth: width,
    sourceHeight: height,
  });

  return (
    <div ref={containerRef} className={styles.image_map}>
      <div ref={draggableSceneRef} className={styles.draggable_scene}>
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          draggable={false}
          loading="eager"
        />

        <div className={styles.overlay}>{overlay}</div>
      </div>
    </div>
  );
};

export const HomeImageMap = memo(Component);
