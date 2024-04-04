import { FC, useRef } from 'react';
import cn from 'classnames';
import { clampScope } from '@anton.bobrov/vevet-init';
import { useStoreGlobal } from '@/store/reducers/page';
import { ArrowButton } from '@/components/Button/Arrow';
import { useMenuStates } from './useMenuStates';
import { IProps } from './types';
import styles from './styles.module.scss';
import { HeaderMenuLinks } from '../MenuLinks';

export const HeaderExpandMenu: FC<IProps> = ({ className, style, id }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { cta } = useStoreGlobal();

  const { isOpened } = useMenuStates({
    duration: 375,
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
      className={cn(
        className,
        styles.header_menu_props,
        isOpened && styles.active,
      )}
      style={style}
      id={id}
      aria-hidden={!isOpened}
    >
      <div ref={containerRef} className={styles.container}>
        <HeaderMenuLinks className={styles.links} hasTooltips={false} />

        {cta && (
          <div className={styles.action}>
            <ArrowButton
              className={styles.action__button}
              tag="a"
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              text={cta.name}
              theme="blue"
              size={60}
            />
          </div>
        )}
      </div>
    </div>
  );
};
