import { FC, useId } from 'react';
import Link from 'next/link';
import { ButtonSimple } from '@/components/Button/Simple';
import { useStoreGlobal, useStoreLexicon } from '@/store/reducers/page';
import { useStoreHeader } from '@/store/reducers/header';
import cn from 'classnames';
import styles from './styles.module.scss';
import { HeaderInlineMenu } from './InlineMenu';
import { LogoDesktop } from '../Logo/Desktop';
import { LogoPhone } from '../Logo/Phone';
import { HeaderExpandMenuButton } from './ExpandMenuButton';

export const Header: FC = () => {
  const { links, menu } = useStoreGlobal();
  const lexicon = useStoreLexicon();
  const { theme } = useStoreHeader();

  const expandMenuId = useId();

  return (
    <header className={cn(styles.header, styles[theme])}>
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

        <ButtonSimple
          className={styles.action}
          tag="button"
          type="button"
          text="Action"
        />

        <HeaderExpandMenuButton
          className={styles.expan_menu_button}
          aria-controls={expandMenuId}
        />
      </div>
    </header>
  );
};
