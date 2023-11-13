import cn from 'classnames';
import { forwardRef, memo } from 'react';
import { useForwardedRef } from '@anton.bobrov/react-hooks';
import { RichTextContent } from '@anton.bobrov/nextjs-sp-helpers';
import styles from './styles.module.scss';
import { TProps } from './types';

const Component = forwardRef<HTMLDivElement, TProps>(
  (
    { hasSpacings = true, hasStyles = true, className, ...props },
    forwardedRef,
  ) => {
    const ref = useForwardedRef(forwardedRef);

    const classNames = cn(
      className,
      styles.richtext,
      hasSpacings && styles.has_spacings,
      hasStyles && styles.has_styles,
    );

    return <RichTextContent ref={ref} {...props} className={classNames} />;
  },
);

Component.displayName = 'RichText';

export const RichText = memo(Component);
