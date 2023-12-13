import { FC, memo, useState } from 'react';
import cn from 'classnames';
import { useStoreLexicon } from '@/store/reducers/page';
import { IProps } from './types';
import styles from './styles.module.scss';
import { useGroups } from './utils/useGroups';
import { EventsItemsCollection } from '../ItemsCollection';
import { Head } from './Head';
import { scrollToElementById } from './utils/scrollToElementById';

const Component: FC<IProps> = ({ className, style, items: itemsProp }) => {
  const {
    events: { addEvent: lexicon },
  } = useStoreLexicon();

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
            bannerTitle={lexicon.title.replace('{month}', month)}
            onBannerMouseEnter={() => setIsBannerHovered(true)}
            onBannerMouseLeave={() => setIsBannerHovered(false)}
          />
        </div>
      ))}
    </div>
  );
};

Component.displayName = 'EventsGroupedItemsCollection';

export const EventsGroupedItemsCollection = memo(Component);
