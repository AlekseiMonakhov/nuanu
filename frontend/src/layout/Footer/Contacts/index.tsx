import { FC } from 'react';
import cn from 'classnames';
import { useStoreGlobal, useStoreLexicon } from '@/store/reducers/page';
import Link from 'next/link';
import { IProps } from './types';
import styles from './styles.module.scss';
import { FooterAddress } from '../Address';
import { FooterLink } from '../Link';

export const FooterContacts: FC<IProps> = ({ className, style }) => {
  const { social, links } = useStoreGlobal();
  const { footer: lexicon, siteName, menu } = useStoreLexicon();

  const copyright = `© ${+new Date().getFullYear()} ${siteName}`;

  return (
    <div className={cn(className, styles.footer_contacts)} style={style}>
      <FooterAddress />

      <div className={styles.contacts}>
        <div>
          <ul className={styles.socials}>
            {social.map(({ key, href, name }) => (
              <li key={key}>
                <FooterLink href={href}>{name}</FooterLink>
              </li>
            ))}
          </ul>

          <p className={styles.phone_copyright}>{copyright}</p>
        </div>

        <div className={styles.info}>
          <div className={styles.info__item}>
            <p>{lexicon.generalEnquires}</p>

            <FooterLink href="mailto:hello@nuanu.com">
              hello@nuanu.com
            </FooterLink>
          </div>

          <div className={styles.info__item}>
            <p>{lexicon.newBusiness}</p>

            <FooterLink href="mailto:business@nuanu.com">
              business@nuanu.com
            </FooterLink>
          </div>

          <p className={styles.phone_copyright}>
            <Link href={links.privacyPolicy}>{menu.privacyPolicy}</Link>
          </p>
        </div>
      </div>

      <div className={styles.desktop_copyright}>
        <p>{copyright}</p>

        <Link href={links.privacyPolicy}>{menu.privacyPolicy}</Link>
      </div>
    </div>
  );
};
