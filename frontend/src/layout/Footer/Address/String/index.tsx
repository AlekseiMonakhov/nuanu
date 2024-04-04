import { FC, useRef } from 'react';
import { useClientSize } from '@anton.bobrov/react-hooks';
import cn from 'classnames';
import { IProps } from './types';
import styles from './styles.module.scss';

export const String: FC<IProps> = ({ text, isHovered }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const { clientWidth: parentWidth } = useClientSize(ref);
  const { clientWidth: textWidth } = useClientSize(textRef);

  return (
    <span
      ref={ref}
      className={cn(styles.string, isHovered && styles.is_hovered)}
    >
      <span
        className={styles.gap}
        style={{ '--width': `${parentWidth - textWidth}px` }}
      />

      <span ref={textRef} className={styles.text}>
        {text}
      </span>
    </span>
  );
};
