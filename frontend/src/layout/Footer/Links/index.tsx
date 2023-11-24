import { FC } from 'react';
import Link from 'next/link';
import { IProps } from './types';
import styles from './styles.module.scss';

export const FooterLinks: FC<IProps> = ({ title, links, target }) => (
  <nav className={styles.footer_links}>
    <p className={styles.title}>{title}</p>

    <ul className={styles.links}>
      {links.map(({ key, href, name }) => (
        <li key={key}>
          <Link
            href={href}
            target={target}
            rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
