import { FC, useEffect, useRef } from 'react';
import cn from 'classnames';
import { Timeline } from '@anton.bobrov/vevet-init';
import { useEvent } from '@anton.bobrov/react-hooks';
import { IProps } from './types';
import styles from './styles.module.scss';

export const Dot: FC<IProps> = ({
  className,
  style,
  isActive,
  duration,
  hasAnimation,
  onEnd: onEndProp,
  onClick,
  index,
  label,
  ...props
}) => {
  const progressRef = useRef<HTMLSpanElement>(null);

  const onEnd = useEvent(onEndProp);

  useEffect(() => {
    if (!hasAnimation || !isActive) {
      return undefined;
    }

    const tm = new Timeline({ duration });

    tm.addCallback('progress', ({ progress }) => {
      if (!progressRef.current) {
        return;
      }

      progressRef.current.style.opacity = '1';
      progressRef.current.style.width = `${progress * 100}%`;
    });

    tm.addCallback('end', onEnd);

    tm.play();

    return () => tm.destroy();
  }, [duration, hasAnimation, isActive, onEnd]);

  useEffect(() => {
    if (!hasAnimation || isActive) {
      return undefined;
    }

    const tm = new Timeline({ duration: 250 });

    tm.addCallback('progress', ({ easing }) => {
      if (!progressRef.current) {
        return;
      }

      progressRef.current.style.opacity = `${1 - easing}`;
    });

    tm.play();

    return () => tm.destroy();
  }, [duration, hasAnimation, isActive, onEnd]);

  return (
    <button
      {...props}
      className={cn(className, styles.dot)}
      style={style}
      type="button"
      onClick={onClick}
      onPointerDownCapture={(event) => event.stopPropagation()}
      aria-label={label ?? `Slide #${index + 1}`}
      aria-current={isActive}
    >
      <span
        className={cn(
          styles.progress_container,
          hasAnimation && styles.has_animation,
          isActive && styles.active,
        )}
      >
        <span ref={progressRef} className={styles.progress} />
      </span>
    </button>
  );
};
