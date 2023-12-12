import { FC, memo } from 'react';
import cn from 'classnames';
import { IProps } from './types';
import styles from './styles.module.scss';
import { useGroups } from './utils/useGroups';
import { EventsItemsCollection } from '../ItemsCollection';
import { Head } from './Head';
import { scrollToElementById } from './utils/scrollToElementById';

const Component: FC<IProps> = ({ className, style, items: itemsProp }) => {
  const { groups, getPrevGroup, getNextGroup } = useGroups(itemsProp);

  return (
    <div
      className={cn(className, styles.events_grouped_items_collection)}
      style={style}
    >
      {groups.map(({ key, id, name, isFirst, isLast, items }) => (
        <div key={key} className={styles.group} id={id}>
          <Head
            name={name}
            isFirst={isFirst}
            isLast={isLast}
            onPrevClick={() => scrollToElementById(getPrevGroup(name).id)}
            onNextClick={() => scrollToElementById(getNextGroup(name).id)}
          />

          <EventsItemsCollection items={items} />
        </div>
      ))}
    </div>
  );
};

Component.displayName = 'EventsGroupedItemsCollection';

export const EventsGroupedItemsCollection = memo(Component);
