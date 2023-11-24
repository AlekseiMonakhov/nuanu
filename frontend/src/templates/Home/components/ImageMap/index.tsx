import { FC, memo, useMemo, useRef } from 'react';
import { LazyImage } from '@anton.bobrov/react-components';
import { IProps } from './types';
import styles from './styles.module.scss';
import { useDrag } from './utils/useDrag';

const Component: FC<IProps> = ({
  datGuiName,
  imageJpg,
  imageWebp,
  alt,
  overlay,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const draggableSceneRef = useRef<HTMLDivElement>(null);

  const imagePaths = useMemo(
    () => ({
      original: '',
      thumb: imageJpg.src,
      thumbWebp: imageWebp.src,
      alt,
    }),
    [imageJpg.src, imageWebp.src, alt],
  );

  useDrag({
    name: datGuiName,
    containerRef,
    draggableSceneRef,
    sourceWidth: imageJpg.width,
    sourceHeight: imageJpg.height,
  });

  return (
    <div ref={containerRef} className={styles.image_map}>
      <div ref={draggableSceneRef} className={styles.draggable_scene}>
        <LazyImage paths={imagePaths} draggable={false} />

        <div className={styles.overlay}>{overlay}</div>
      </div>
    </div>
  );
};

export const HomeImageMap = memo(Component);
