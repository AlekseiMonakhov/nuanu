import cn from 'classnames';
import { forwardRef, memo } from 'react';
import { ButtonAnchor } from '@anton.bobrov/react-components';
import styles from './styles.module.scss';
import { TFillButtonProps } from './types';

const Component = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  TFillButtonProps
>(({ className, style, text, theme, size, sup, ...props }, ref) => (
  <ButtonAnchor
    ref={ref}
    className={cn(
      styles.fill_button,
      className,
      styles[`theme_${theme}`],
      styles[`size_${size}`],
    )}
    style={style}
    title={text}
    {...props}
  >
    <span className={styles.text}>{text}</span>

    {sup && <span className={styles.sup}>{sup}</span>}
  </ButtonAnchor>
));

Component.displayName = 'FillButton';

export const FillButton = memo(Component);
