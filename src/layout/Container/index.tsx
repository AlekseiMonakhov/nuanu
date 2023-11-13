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
  hasContentTopSpacing = true,
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
      <div
        className={cn(
          styles.content,
          hasTopSpacing && hasContentTopSpacing && styles.top_spacing,
        )}
      >
        {children}
      </div>
    </main>

    {hasFooter && <Footer />}
  </>
);

export const LayoutContainer = memo(Component);
