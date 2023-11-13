import { FC } from 'react';
import Link from 'next/link';
import { ButtonSimple } from '@/components/Button/Simple';
import { menuSlice } from '@/store/reducers/menu';
import store from '@/store/store';
import { useStoreGlobal, useStoreLexicon } from '@/store/reducers/page';
import { useStoreHeader } from '@/store/reducers/header';
import cn from 'classnames';
import styles from './styles.module.scss';
import { HeaderMenu } from './Menu';
import { LogoDesktop } from '../Logo/Desktop';
import { LogoPhone } from '../Logo/Phone';

export const Header: FC = () => {
  const { links, menu } = useStoreGlobal();
  const lexicon = useStoreLexicon();
  const { theme } = useStoreHeader();

  return (
    <header className={cn(styles.header, styles[theme])}>
      <div className={styles.wrap}>
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

        <HeaderMenu className={styles.menu} links={menu || []} />

        <ButtonSimple
          tag="button"
          type="button"
          text={lexicon.menu.open}
          onClick={() => store.dispatch(menuSlice.actions.open())}
        />
      </div>
    </header>
  );
};
