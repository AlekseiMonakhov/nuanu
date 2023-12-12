import { FC, memo } from 'react';
import { IProps } from './types';
import styles from './styles.module.scss';
import { EventsItem } from '../Item';
import { EventsBannerAdd } from '../BannerAdd';

const Component: FC<IProps> = ({
  items,
  itemsClassName,
  bannerTitle,
  onBannerMouseEnter,
  onBannerMouseLeave,
}) => (
  <div className={styles.events_items_collection}>
    {items.map(({ key, ...item }) => (
      <EventsItem key={key} {...item} className={itemsClassName} />
    ))}

    {bannerTitle && (
      <EventsBannerAdd
        className={styles.banner}
        title={bannerTitle}
        onMouseEnter={onBannerMouseEnter}
        onMouseLeave={onBannerMouseLeave}
      />
    )}
  </div>
);

Component.displayName = 'EventsItemsCollection';

export const EventsItemsCollection = memo(Component);
