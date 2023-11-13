import cn from 'classnames';
import { forwardRef, memo } from 'react';
import { ButtonAnchor } from '@anton.bobrov/react-components';
import styles from './styles.module.scss';
import { TButtonSimpleProps } from './types';

const Component = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  TButtonSimpleProps
>(({ className, style, text, ...props }, ref) => (
  <ButtonAnchor
    ref={ref}
    className={cn(styles.button, className)}
    style={style}
    title={text}
    {...props}
  >
    {text}
  </ButtonAnchor>
));

Component.displayName = 'ButtonSimple';

export const ButtonSimple = memo(Component);
