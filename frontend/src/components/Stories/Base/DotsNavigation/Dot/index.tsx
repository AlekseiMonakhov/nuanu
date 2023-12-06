import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import { useStoreLexicon } from '@/store/reducers/page';
import { IProps } from './types';
import styles from './styles.module.scss';

export const Dot: FC<IProps> = ({
  className,
  style,
  index,
  isActive,
  onClick,
  progress: progressProp,
  controllableId,
  isDisabled,
  ...props
}) => {
  const { navigation: lexicon } = useStoreLexicon();

  const [progress, setProgress] = useState<null | number>(0);

  useEffect(() => {
    if (isActive) {
      setProgress(progressProp);
    }
  }, [isActive, progressProp]);

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
      <span className={styles.progress_container}>
        <span
          className={cn(styles.progress, isActive && styles.active)}
          style={{ transform: `scale(${progress}, 1)` }}
        />
      </span>
    </button>
  );
};
