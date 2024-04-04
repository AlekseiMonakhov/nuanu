import { FC, useEffect, useRef } from 'react';
import cn from 'classnames';
import { IProps } from './types';
import styles from './styles.module.scss';
import { Label } from './Label';

export const Labels: FC<IProps> = ({
  className,
  style,
  items,
  onProgressMove,
  children,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);

  const { length } = items;

  useEffect(
    () =>
      onProgressMove((progress) => {
        if (!trackRef.current) {
          return;
        }

        trackRef.current.style.setProperty(
          '--progress',
          `${progress * (length - 1)}`,
        );
      }),
    [length, onProgressMove],
  );

  return (
    <div className={cn(className, styles.labels)} style={style}>
      <div className={styles.scene}>
        <div ref={trackRef} className={styles.track}>
          {items.map(({ key, label }, index) => (
            <Label
              key={key}
              className={styles.label}
              text={label}
              index={index}
              length={length}
              onProgressMove={onProgressMove}
            />
          ))}
        </div>
      </div>

      <div className={styles.children}>{children}</div>
    </div>
  );
};
