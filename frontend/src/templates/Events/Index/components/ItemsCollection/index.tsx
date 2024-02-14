import { FC, memo } from 'react';
import { IProps } from './types';
import styles from './styles.module.scss';
import { EventsItem } from '../Item';
import { EventsBannerAdd } from '../BannerAdd';

const Component: FC<IProps> = ({
  items,
  monthName,
  bannerAdd,
  itemsClassName,
  onBannerMouseEnter,
  onBannerMouseLeave,
}) => (
  <div className={styles.events_items_collection}>
    {items.map(({ key, ...item }) => (
      <EventsItem
        key={key}
        {...item}
        className={`${itemsClassName}   ${key}`}
      />
    ))}

    {bannerAdd && (
      <EventsBannerAdd
        {...bannerAdd}
        className={styles.banner}
        patterns={[{ name: '{month}', value: monthName }]}
        onMouseEnter={onBannerMouseEnter}
        onMouseLeave={onBannerMouseLeave}
      />
    )}
  </div>
);

Component.displayName = 'EventsItemsCollection';

export const EventsItemsCollection = memo(Component);
