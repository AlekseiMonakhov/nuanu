import { FC, useEffect, useRef } from 'react';
import cn from 'classnames';
import { Timeline, clampScope } from '@anton.bobrov/vevet-init';
import { useEvent } from '@anton.bobrov/react-hooks';
import { useStoreLexicon } from '@/store/reducers/page';
import { IProps } from './types';
import styles from './styles.module.scss';

export const Dot: FC<IProps> = ({
  className,
  style,
  index,
  isActive,
  onClick,
  hasAutoChange,
  autoChangeTimeout,
  controllableId,
  onAutoChangeEnd: onAutoChangeEndProp,
  isDisabled,
  ...props
}) => {
  const progressRef = useRef<HTMLSpanElement>(null);

  const onAutoChangeEnd = useEvent(onAutoChangeEndProp);

  const { navigation: lexicon } = useStoreLexicon();

  useEffect(() => {
    if (!hasAutoChange || !isActive || isDisabled) {
      return undefined;
    }

    const tm = new Timeline({ duration: autoChangeTimeout });

    tm.addCallback('progress', ({ progress }) => {
      if (!progressRef.current) {
        return;
      }

      progressRef.current.style.opacity = `${clampScope(progress, [0, 0.05])}`;
      progressRef.current.style.width = `${progress * 100}%`;
    });

    tm.addCallback('end', onAutoChangeEnd);

    tm.play();

    return () => tm.destroy();
  }, [autoChangeTimeout, hasAutoChange, isActive, isDisabled, onAutoChangeEnd]);

  useEffect(() => {
    if (!hasAutoChange || isActive) {
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
  }, [hasAutoChange, isActive]);

  return (
    <button
      {...props}
      className={cn(className, styles.dot)}
      style={style}
      type="button"
      onClick={() => !isDisabled && onClick()}
      onPointerUpCapture={(event) => event.stopPropagation()}
      aria-label={`${lexicon.slideNumber + (index + 1)})`}
      aria-current={isActive}
      aria-controls={controllableId}
      aria-disabled={isDisabled}
    >
      <span
        className={cn(
          styles.progress_container,
          hasAutoChange && styles.has_auto_change_animation,
          isActive && styles.active,
        )}
      >
        <span ref={progressRef} className={styles.progress} />
      </span>
    </button>
  );
};
