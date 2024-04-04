import { FC, memo, useState } from 'react';
import cn from 'classnames';
import { IProps } from './types';
import styles from './styles.module.scss';
import { useGroups } from './utils/useGroups';
import { EventsItemsCollection } from '../ItemsCollection';
import { Head } from './Head';
import { scrollToElementById } from './utils/scrollToElementById';

const Component: FC<IProps> = ({
  className,
  style,
  items: itemsProp,
  onItemClick,
  bannerAdd,
}) => {
  const { groups, getPrevGroup, getNextGroup } = useGroups(itemsProp);

  const [isBannerHovered, setIsBannerHovered] = useState(false);

  const darkenClassNames = cn(
    styles.has_darken,
    isBannerHovered && styles.darken,
  );

  return (
    <div
      className={cn(className, styles.events_grouped_items_collection)}
      style={style}
    >
      {groups.map(({ key, id, name, month, isFirst, isLast, items }) => (
        <div key={key} className={styles.group} id={id}>
          <Head
            className={cn(styles.head, darkenClassNames)}
            name={name}
            isFirst={isFirst}
            isLast={isLast}
            onPrevClick={() => scrollToElementById(getPrevGroup(name).id)}
            onNextClick={() => scrollToElementById(getNextGroup(name).id)}
          />

          <EventsItemsCollection
            items={items}
            itemsClassName={darkenClassNames}
            bannerAdd={bannerAdd}
            monthName={month}
            onBannerMouseEnter={() => setIsBannerHovered(true)}
            onBannerMouseLeave={() => setIsBannerHovered(false)}
            onItemClick={onItemClick}
          />
        </div>
      ))}
    </div>
  );
};

Component.displayName = 'EventsGroupedItemsCollection';

export const EventsGroupedItemsCollection = memo(Component);
