import { FC, useId, useRef } from 'react';
import Link from 'next/link';
import { useStoreGlobal, useStoreLexicon } from '@/store/reducers/page';
import { useStoreHeader } from '@/store/reducers/header';
import cn from 'classnames';
import styles from './styles.module.scss';
import { HeaderInlineMenu } from './InlineMenu';
import { LogoDesktop } from '../Logo/Desktop';
import { LogoPhone } from '../Logo/Phone';
import { HeaderExpandMenuButton } from './ExpandMenuButton';
import { HeaderExpandMenu } from './ExpandMenu';

export const Header: FC = () => {
  const ref = useRef<HTMLElement>(null);

  const { links, menu } = useStoreGlobal();
  const lexicon = useStoreLexicon();
  const { theme } = useStoreHeader();

  const expandMenuId = useId();

  return (
    <header ref={ref} className={cn(styles.header, styles[theme])}>
      <div className={styles.header_container}>
        <Link
          href={links.home}
          className={styles.logo_desktop}
          title={lexicon.siteName}
        >
          <LogoDesktop />
        </Link>

        <Link
          href={links.home}
          className={styles.logo_phone}
          title={lexicon.siteName}
        >
          <LogoPhone />
        </Link>

        <HeaderInlineMenu className={styles.inline_menu} links={menu} />

        <div className={styles.action}>action</div>

        <HeaderExpandMenuButton
          className={styles.expan_menu_button}
          aria-controls={expandMenuId}
        />
      </div>

      <HeaderExpandMenu className={styles.expand_menu} id={expandMenuId} />
    </header>
  );
};
