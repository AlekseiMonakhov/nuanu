import { FC, useId, useRef } from 'react';
import Link from 'next/link';
import { useStoreGlobal, useStoreLexicon } from '@/store/reducers/page';
import { useStoreHeader } from '@/store/reducers/header';
import cn from 'classnames';
import store from '@/store/store';
import { menuSlice, useStoreMenu } from '@/store/reducers/menu';
import { useEventListener } from '@anton.bobrov/react-hooks';
import { FillButton } from '@/components/Button/Fill';
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
  const { isOpened } = useStoreMenu();

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
    <header
      className={cn(styles.header, styles[theme], isOpened && styles.active)}
      id="header"
    >
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

        <div className={styles.action}>
          <FillButton
            tag="a"
            href="https://google.com/"
            target="_blank"
            rel="noopener noreferrer"
            text={lexicon.menu.bookTour}
            theme="blue"
            size={50}
          />
        </div>

        <HeaderExpandMenuButton
          className={styles.expan_menu_button}
          aria-controls={expandMenuId}
        />
      </div>

      <HeaderExpandMenu className={styles.expand_menu} id={expandMenuId} />
    </header>
  );
};
