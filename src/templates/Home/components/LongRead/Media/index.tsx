import { FC, useMemo } from 'react';
import cn from 'classnames';
import { MediaVideoOrImage } from '@/components/Media/VideoOrImage';
import { IItem, IProps } from './types';
import styles from './styles.module.scss';
import { getSizeMapStyles } from './sizeMap';

export const Media: FC<IProps> = ({ items: itemsProp, activeIndex }) => {
  const items = useMemo(() => {
    const array: IItem[] = [];
    let index = 0;

    itemsProp.forEach(({ media }, itemIndex) => {
      media.forEach((mediaItem) => {
        array.push({
          key: index,
          itemIndex,
          selfIndex: index,
          media: mediaItem,
        });

        index += 1;
      });
    });

    array.reverse();

    return array;
  }, [itemsProp]);

  return (
    <div className={styles.media}>
      {items.map(({ key, itemIndex, selfIndex, media }) => (
        <MediaVideoOrImage
          {...media}
          className={cn(
            styles.item,
            styles[`item_${selfIndex}`],
            activeIndex === itemIndex && styles.active,
          )}
          style={{
            ...getSizeMapStyles(selfIndex, activeIndex),
          }}
          key={key}
          isPlaying={activeIndex === itemIndex}
        />
      ))}
    </div>
  );
};
