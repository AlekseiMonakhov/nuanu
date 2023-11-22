import { FC, useRef } from 'react';
import cn from 'classnames';
import { clampScope } from '@anton.bobrov/vevet-init';
import { useStoreGlobal } from '@/store/reducers/page';
import Link from 'next/link';
import { useMenuStates } from './useMenuStates';
import { IProps } from './types';
import styles from './styles.module.scss';

export const HeaderExpandMenu: FC<IProps> = ({ className, style, id }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { menu } = useStoreGlobal();

  const { isOpened } = useMenuStates({
    duration: 750,
    onProgress: (progress) => {
      if (!ref.current || !containerRef.current) {
        return;
      }

      const height = containerRef.current.clientHeight;
      const currentHeight = progress === 1 ? 'auto' : `${height * progress}px`;

      ref.current.style.display = progress > 0 ? 'block' : 'none';
      ref.current.style.height = currentHeight;

      containerRef.current.style.opacity = `${clampScope(progress, [0.5, 1])}`;
    },
  });

  return (
    <div
      ref={ref}
      className={cn(className, styles.header_menu_props)}
      style={style}
      id={id}
      aria-hidden={!isOpened}
    >
      <div ref={containerRef} className={styles.container}>
        <ul className={styles.links}>
          {menu.map(({ key, href, name, isHighlighted, isActive }) => (
            <li key={key} className={styles.li}>
              <Link
                href={href}
                className={cn(styles.link, isHighlighted && styles.highlighted)}
                aria-current={isActive ? 'page' : undefined}
              >
                {isHighlighted ? <span>{name}</span> : name}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.action}>action</div>
      </div>
    </div>
  );
};
