import cn from 'classnames';
import { forwardRef, memo } from 'react';
import { ButtonAnchor } from '@anton.bobrov/react-components';
import styles from './styles.module.scss';
import { TArcArrowButtonProps } from './types';

const Component = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  TArcArrowButtonProps
>(
  (
    { className, style, text, count, arrowPosition, isActive, ...props },
    ref,
  ) => {
    const classNames = cn(isActive && styles.active);

    return (
      <ButtonAnchor
        ref={ref}
        className={cn(
          styles.button,
          className,
          styles[`arrow_${arrowPosition}`],
          classNames,
        )}
        style={style}
        title={text}
        {...props}
      >
        <span className={cn(styles.count, classNames)} data-content={count} />

        <span className={styles.text}>{text}</span>

        <span className={cn(styles.close, classNames)} />
      </ButtonAnchor>
    );
  },
);

Component.displayName = 'ArcArrowButton';

export const ArcArrowButton = memo(Component);
