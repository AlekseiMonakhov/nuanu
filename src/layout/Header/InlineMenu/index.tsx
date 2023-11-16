import { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { useStoreLexicon } from '@/store/reducers/page';
import { IProps } from './types';
import styles from './styles.module.scss';

export const HeaderInlineMenu: FC<IProps> = ({ className, style, links }) => {
  const { menu: lexicon } = useStoreLexicon();

  return (
    <ul
      className={cn(styles.header_inline_menu, className)}
      style={style}
      aria-label={lexicon.label}
    >
      {links.map(({ key, name, href, isActive, isHighlighted }) => (
        <li key={key} className={styles.li}>
          <Link
            href={href}
            className={cn(
              styles.link,
              isActive && styles.active,
              isHighlighted && styles.highlighted,
            )}
            aria-current={isActive ? 'page' : undefined}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
