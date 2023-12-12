import { FC, useId, useRef } from 'react';
import Link from 'next/link';
import { useStoreGlobal, useStoreLexicon } from '@/store/reducers/page';
import { useStoreHeader } from '@/store/reducers/header';
import cn from 'classnames';
import store from '@/store/store';
import { menuSlice } from '@/store/reducers/menu';
import { useEventListener } from '@anton.bobrov/react-hooks';
import styles from './styles.module.scss';
import { HeaderInlineMenu } from './InlineMenu';
import { LogoDesktop } from '../Logo/Desktop';
import { LogoPhone } from '../Logo/Phone';
import { HeaderExpandMenuButton } from './ExpandMenuButton';
import { HeaderExpandMenu } from './ExpandMenu';

export const Header: FC = () => {
  const { links } = useStoreGlobal();
  const lexicon = useStoreLexicon();
  const { theme } = useStoreHeader();

  const containerRef = useRef<HTMLDivElement>(null);

  const expandMenuId = useId();

  useEventListener({
    ref: containerRef,
    target: 'click',
    listener: (event) => {
      if (event.target === containerRef.current) {
        store.dispatch(menuSlice.actions.toggle());
      }
    },
  });

  return (
    <header className={cn(styles.header, styles[theme])} id="header">
      <div ref={containerRef} className={styles.header_container}>
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

        <HeaderInlineMenu className={styles.inline_menu} />

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
