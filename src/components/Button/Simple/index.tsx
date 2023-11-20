import cn from 'classnames';
import { forwardRef, memo } from 'react';
import { ButtonAnchor } from '@anton.bobrov/react-components';
import styles from './styles.module.scss';
import { TButtonSimpleProps } from './types';

const Component = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  TButtonSimpleProps
>(({ className, style, text, kind, theme, ...props }, ref) => (
  <ButtonAnchor
    ref={ref}
    className={cn(
      styles.button,
      className,
      styles[`kind_${kind}`],
      styles[`theme_${theme}`],
    )}
    style={style}
    title={text}
    {...props}
  >
    {text}
  </ButtonAnchor>
));

Component.displayName = 'ButtonSimple';

export const ButtonSimple = memo(Component);
