import { forwardRef, memo, useEffect } from 'react';
import cn from 'classnames';
import { useClientSize, useForwardedRef } from '@anton.bobrov/react-hooks';
import { vevet } from '@anton.bobrov/vevet-init';
import { IProps } from './types';
import styles from './styles.module.scss';
import { FooterContacts } from './Contacts';
import { FooterSubscribe } from './SubscribeForm';

const Component = forwardRef<HTMLDivElement, IProps>(
  ({ className, style, theme = 'light' }, forwardedRef) => {
    const ref = useForwardedRef(forwardedRef);

    const { clientHeight } = useClientSize(ref);

    useEffect(() => {
      if (clientHeight > 0) {
        vevet.html.style.setProperty('--footer-height', `${clientHeight}px`);
      }
    }, [clientHeight]);

    return (
      <footer
        ref={ref}
        className={cn(styles.footer, className, styles[`theme_${theme}`])}
        style={style}
      >
        <div className={styles.container}>
          <FooterSubscribe className={styles.subscribe} />

          <FooterContacts className={styles.contacts} />
        </div>
      </footer>
    );
  },
);

Component.displayName = 'Footer';

export const Footer = memo(Component);
