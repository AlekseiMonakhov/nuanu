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
        <div className={styles.container}>
          <div className={styles.form}>form</div>

          <div className={styles.columns}>
            <FooterLinks title={menuLexicon.site} links={menu}>
              <p className={styles.additional}>{copyright}</p>
            </FooterLinks>

            <FooterLinks
              title={menuLexicon.social}
              links={social}
              target="_blank"
            >
              <p className={styles.additional}>
                <Link href={links.privacyPolicy}>
                  {menuLexicon.privacyPolicy}
                </Link>
              </p>
            </FooterLinks>
          </div>
        </div>

        <div className={styles.bottom}>
          <FooterLogo className={styles.bottom__logo} />

          <div className={styles.bottom__info}>
            <p>
              <Link href={links.privacyPolicy}>
                {menuLexicon.privacyPolicy}
              </Link>
            </p>

            <p>{copyright}</p>
          </div>
        </div>
      </footer>
    );
  },
);

Component.displayName = 'Footer';

export const Footer = memo(Component);
