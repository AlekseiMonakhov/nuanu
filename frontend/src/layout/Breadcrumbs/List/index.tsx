import { FC, memo } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { useStoreGlobal, useStoreLexicon } from '@/store/reducers/page';
import styles from './styles.module.scss';

const Component: FC = () => {
  const { breadcrumbs } = useStoreGlobal();
  const { navigation: lexicon } = useStoreLexicon();

  if (!breadcrumbs || !breadcrumbs.length) {
    return null;
  }

  return (
    <nav className={styles.breadcrumbs} aria-label={lexicon.breadcrumbs}>
      <ul className={styles.list}>
        {breadcrumbs.map((item, index) => (
          <li
            key={item.id}
            className={cn(
              styles.item,
              index === breadcrumbs.length - 1 && styles.active,
            )}
          >
            {index === breadcrumbs.length - 1 ? (
              <span>{item.name}</span>
            ) : (
              <Link
                href={item.href}
                className={cn(
                  styles.link,
                  index === breadcrumbs.length - 1 && styles.active,
                )}
              >
                <span>{item.name}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const BreadcrumbsList = memo(Component);
