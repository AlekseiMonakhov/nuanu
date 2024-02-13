import { FC, useRef } from 'react';
import cn from 'classnames';
import { DynamicImage } from '@/components/Media/DynamicImage';
import styles from './styles.module.scss';
import { IProps } from './types';
import { useItems } from './utils/useItems';
import { useAnimation } from './utils/useAnimation';

export const ImageMarquee: FC<IProps> = ({
  className,
  style,
  items: itemsProp,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { groups, groupWidth } = useItems({
    ref,
    items: itemsProp,
  });

  useAnimation({ ref, groupWidth });

  return (
    <div
      ref={ref}
      className={cn(className, styles.image_marquee)}
      style={style}
    >
      {groups.map(({ key: groupKey, items }) => (
        <div key={groupKey} className={styles.group}>
          {items.map(({ key: itemKey, ...image }) => (
            <div
              key={itemKey}
              className={cn(styles.item, 'image-marquee-item')}
            >
              <div className={styles.item__wrapper}>
                <DynamicImage {...image} sizes="none" draggable={false} />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
