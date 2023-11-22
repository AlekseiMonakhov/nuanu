import { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { useStoreLexicon, useStorePage } from '@/store/reducers/page';
import { IProps } from './types';
import styles from './styles.module.scss';

export const HeaderInlineMenu: FC<IProps> = ({ className, style, links }) => {
  const { menu: lexicon } = useStoreLexicon();
  const { templateName } = useStorePage();

  return (
    <ul
      className={cn(className, styles.header_inline_menu)}
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
              templateName === 'Home'
                ? styles.no_active_styles
                : styles.has_active_styles,
            )}
            aria-current={isActive ? 'page' : undefined}
          >
            {isHighlighted ? <span>{name}</span> : name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
