import { FC } from 'react';
import cn from 'classnames';
import { IProps } from './types';
import styles from './styles.module.scss';

export const XDragIndicator: FC<IProps> = ({
  className,
  style,
  progress,
  isActive,
}) => {
  const classNames = [isActive && styles.active];

  return (
    <div
      className={cn(className, styles.drag_indicator, classNames)}
      style={style}
    >
      <div
        className={cn(styles.bar, classNames)}
        style={{ '--progress': progress }}
      />
    </div>
  );
};
