import cn from 'classnames';
import { forwardRef } from 'react';
import styles from './styles.module.scss';
import { IProps } from './types';

export const LayoutWrap = forwardRef<HTMLDivElement, IProps>(
  ({ variant, className, style, children, ...props }, ref) => (
    <div
      ref={ref}
      {...props}
      className={cn(
        className,
        styles.layout_wrap,
        variant && styles[`variant_${variant}`],
      )}
      style={style}
    >
      {children}
    </div>
  ),
);

LayoutWrap.displayName = 'LayoutWrap';
