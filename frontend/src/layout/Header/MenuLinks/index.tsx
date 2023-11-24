import { FC } from 'react';
import cn from 'classnames';
import { useStoreGlobal, useStorePage } from '@/store/reducers/page';
import Link from 'next/link';
import { IProps } from './types';
import styles from './styles.module.scss';

export const HeaderMenuLinks: FC<IProps> = ({ className, style, ...props }) => {
  const { menu } = useStoreGlobal();
  const { templateName } = useStorePage();

  return (
    <ul {...props} className={cn(className, styles.links)} style={style}>
      {menu.map(({ key, href, name, isHighlighted, isActive }) => (
        <li key={key}>
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
            <span>{name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
