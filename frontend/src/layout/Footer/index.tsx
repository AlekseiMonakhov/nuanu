import { forwardRef, memo, useEffect } from 'react';
import cn from 'classnames';
import { useClientSize, useForwardedRef } from '@anton.bobrov/react-hooks';
import { vevet } from '@anton.bobrov/vevet-init';
import { useStoreGlobal, useStoreLexicon } from '@/store/reducers/page';
import Link from 'next/link';
import { IProps } from './types';
import styles from './styles.module.scss';
import { FooterLinks } from './Links';
import { FooterLogo } from './Logo';
import { FooterSubscribeForm } from './SubscribeForm';

const Component = forwardRef<HTMLDivElement, IProps>(
  ({ className, style, theme = 'light' }, forwardedRef) => {
    const ref = useForwardedRef(forwardedRef);

    const { clientHeight } = useClientSize(ref);

    const { siteName, menu: menuLexicon } = useStoreLexicon();
    const { menu, social, links } = useStoreGlobal();

    const copyright = `© ${+new Date().getFullYear()} ${siteName}`;

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
        <div className={styles.container} style={style}>
          <div className={styles.columns}>
            <FooterLinks title={menuLexicon.site} links={menu} />

            <FooterLinks
              title={menuLexicon.social}
              links={social}
              target="_blank"
            />
          </div>

          <FooterSubscribeForm />
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottom__info}>
            <p>{copyright}</p>

            <p>
              <Link href={links.privacyPolicy}>
                {menuLexicon.privacyPolicy}
              </Link>
            </p>
          </div>

          <FooterLogo className={styles.bottom__logo} />
        </div>
      </footer>
    );
  },
);

Component.displayName = 'Footer';

export const Footer = memo(Component);
