import { FC, PropsWithChildren, memo } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { Footer } from '../Footer';
import { IProps } from './types';

const Component: FC<PropsWithChildren<IProps>> = ({
  children,
  className,
  style,
  hasTopSpacing = true,
  hasFooter = true,
}) => (
  <>
    <main
      className={cn(
        styles.layout_container,
        className,
        hasTopSpacing && styles.top_spacing,
      )}
      style={style}
    >
      {children}
    </main>

    {hasFooter && <Footer />}
  </>
);

Component.displayName = 'LayoutContainer';

export const LayoutContainer = memo(Component);
