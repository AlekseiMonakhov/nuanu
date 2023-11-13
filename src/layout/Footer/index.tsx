import { forwardRef, memo, useEffect } from 'react';
import cn from 'classnames';
import { IBaseComponent } from '@anton.bobrov/react-components';
import { useClientSize, useForwardedRef } from '@anton.bobrov/react-hooks';
import { vevet } from '@anton.bobrov/vevet-init';
import { useStoreLexicon } from '@/store/reducers/page';
import { LayoutWrap } from '../Wrap';
import styles from './styles.module.scss';

const Component = forwardRef<HTMLDivElement, IBaseComponent>(
  ({ className, style }, forwardedRef) => {
    const ref = useForwardedRef(forwardedRef);

    const { copyright } = useStoreLexicon();

    const { clientHeight } = useClientSize(ref);

    useEffect(() => {
      if (clientHeight > 0) {
        vevet.html.style.setProperty('--footer-height', `${clientHeight}px`);
      }
    }, [clientHeight]);

    return (
      <footer ref={ref} className={cn(styles.footer, className)} style={style}>
        <LayoutWrap>{copyright}</LayoutWrap>
      </footer>
    );
  },
);

Component.displayName = 'Footer';

export const Footer = memo(Component);
