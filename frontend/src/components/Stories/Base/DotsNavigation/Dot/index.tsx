import { FC, useEffect, useRef } from 'react';
import cn from 'classnames';
import { useStoreLexicon } from '@/store/reducers/page';
import { IProps } from './types';
import styles from './styles.module.scss';

export const Dot: FC<IProps> = ({
  className,
  style,
  index,
  label,
  isActive,
  onClick,
  progressHandler,
  isDisabled,
  ...props
}) => {
  const progressRef = useRef<HTMLSpanElement>(null);

  const { navigation: lexicon } = useStoreLexicon();

  useEffect(() => {
    if (!progressRef.current) {
      return undefined;
    }

    if (!progressHandler) {
      progressRef.current.style.transform = 'scale(1, 1)';
    }

    if (!isActive) {
      return undefined;
    }

    const callback = progressHandler?.callbacks?.add(
      'update',
      ({ progress }) => {
        progressRef.current!.style.transform = `scale(${progress}, 1)`;
      },
    );

    return () => callback?.remove();
  }, [isActive, progressHandler]);

  return (
    <button
      {...props}
      className={cn(className, styles.dot)}
      style={style}
      type="button"
      onClick={() => !isDisabled && onClick()}
      onPointerUpCapture={(event) => event.stopPropagation()}
      aria-label={`${lexicon.slideNumber + (index + 1)} (${label})`}
      aria-current={isActive}
      aria-disabled={isDisabled}
    >
      <span className={styles.progress_container}>
        <span
          ref={progressRef}
          className={cn(styles.progress, isActive && styles.active)}
        />
      </span>
    </button>
  );
};
