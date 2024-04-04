import cn from 'classnames';
import { forwardRef, memo } from 'react';
import { ButtonAnchor } from '@anton.bobrov/react-components';
import styles from './styles.module.scss';
import { TArrowButtonProps } from './types';
import { DesktopArrow } from './icons/DesktopArrow';
import { PhoneArrow } from './icons/PhoneArrow';

const Component = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  TArrowButtonProps
>(({ className, style, text, theme, size, ...props }, ref) => (
  <ButtonAnchor
    ref={ref}
    className={cn(
      styles.button,
      className,
      styles[`theme_${theme}`],
      styles[`size_${size}`],
    )}
    style={style}
    title={text}
    {...props}
  >
    <span className={styles.content}>
      {text}

      <DesktopArrow className={styles.desktop_arrow} />
      <PhoneArrow className={styles.phone_arrow} />
    </span>
  </ButtonAnchor>
));

Component.displayName = 'ArrowButton';

export const ArrowButton = memo(Component);
