import cn from 'classnames';
import { forwardRef, memo } from 'react';
import styles from './styles.module.scss';
import { IProps } from './types';

const Component = forwardRef<HTMLHeadingElement, IProps>(
  ({ variant, as, children, className, ...props }, ref) => {
    const style = as || variant;

    const classNames = cn(
      className,
      as !== false && styles[`heading_${style}`],
    );

    if (variant === 6) {
      return (
        <h6 ref={ref} {...props} className={classNames}>
          {children}
        </h6>
      );
    }

    if (variant === 5) {
      return (
        <h5 ref={ref} {...props} className={classNames}>
          {children}
        </h5>
      );
    }

    if (variant === 4) {
      return (
        <h4 ref={ref} {...props} className={classNames}>
          {children}
        </h4>
      );
    }

    if (variant === 3) {
      return (
        <h3 ref={ref} {...props} className={classNames}>
          {children}
        </h3>
      );
    }

    if (variant === 2) {
      return (
        <h2 ref={ref} {...props} className={classNames}>
          {children}
        </h2>
      );
    }

    return (
      <h1 ref={ref} {...props} className={classNames}>
        {children}
      </h1>
    );
  },
);

Component.displayName = 'Heading';

export const Heading = memo(Component);
