import cn from 'classnames';
import { forwardRef, memo } from 'react';
import { ButtonAnchor } from '@anton.bobrov/react-components';
import styles from './styles.module.scss';
import { TFillButtonProps } from './types';

const Component = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  TFillButtonProps
>(({ className, style, text, theme, ...props }, ref) => (
  <ButtonAnchor
    ref={ref}
    className={cn(styles.button, className, styles[`theme_${theme}`])}
    style={style}
    title={text}
    {...props}
  >
    {text}
  </ButtonAnchor>
));

Component.displayName = 'FillButton';

export const FillButton = memo(Component);
