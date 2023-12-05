/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, memo, useRef, useState } from 'react';
import { DynamicImage } from '@/components/Media/DynamicImage';
import cn from 'classnames';
import { IProps } from './types';
import styles from './styles.module.scss';
import { useDrag } from './utils/useDrag';
import { XDragIndicator } from './XDragIndicator';

const Component: FC<IProps> = ({
  className,
  style,
  datGuiName,
  src,
  width,
  height,
  alt,
  overlay,
  isDraggable,
  onClick,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const draggableSceneRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [xProgress, setXProgress] = useState(0);

  const { hasHorizontalScroll } = useDrag({
    name: datGuiName,
    containerRef,
    draggableSceneRef,
    sourceWidth: width,
    sourceHeight: height,
    isDraggable,
    onDragStart: () => setIsDragging(true),
    onDragEnd: () => setIsDragging(false),
    onDrag: (props) => setXProgress(props.xProgress),
  });

  return (
    <div
      className={cn(className, styles.image_map)}
      style={style}
      onClick={onClick}
    >
      <div ref={containerRef} className={styles.draggable_container}>
        <div
          ref={draggableSceneRef}
          className={cn(
            styles.draggable_scene,
            isDraggable && styles.draggable,
          )}
        >
          <DynamicImage
            original={src}
            width={width}
            height={height}
            alt={alt}
            draggable={false}
            aria-hidden
          />

          <div className={styles.overlay}>{overlay}</div>
        </div>

        {isDraggable && (
          <XDragIndicator
            className={cn(
              styles.drag_indicator,
              !hasHorizontalScroll && styles.hide,
            )}
            progress={xProgress}
            isActive={isDragging}
          />
        )}
      </div>

      {children}
    </div>
  );
};

export const HomeImageMap = memo(Component);
