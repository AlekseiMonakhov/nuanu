import { FC, memo } from 'react';
import { IProps } from './types';
import styles from './styles.module.scss';
import { EventsItem } from '../Item';

const Component: FC<IProps> = ({ items }) => (
  <div className={styles.events_items_collection}>
    {items.map(({ key, ...item }) => (
      <EventsItem key={key} {...item} />
    ))}
  </div>
);

Component.displayName = 'EventsItemsCollection';

export const EventsItemsCollection = memo(Component);
