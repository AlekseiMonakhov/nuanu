import cn from 'classnames';
import { forwardRef, memo } from 'react';
import { ButtonAnchor } from '@anton.bobrov/react-components';
import styles from './styles.module.scss';
import { TArcArrowButtonProps } from './types';

const Component = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  TArcArrowButtonProps
>(({ className, style, text, arrowPosition, ...props }, ref) => (
  <ButtonAnchor
    ref={ref}
    className={cn(styles.button, className, styles[`arrow_${arrowPosition}`])}
    style={style}
    title={text}
    {...props}
  >
    <span className={styles.text}>{text}</span>
  </ButtonAnchor>
));

Component.displayName = 'ArcArrowButton';

export const ArcArrowButton = memo(Component);
