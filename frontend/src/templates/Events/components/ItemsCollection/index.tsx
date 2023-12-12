import { FC, memo } from 'react';
import cn from 'classnames';
import { IProps } from './types';
import styles from './styles.module.scss';
import { EventsItem } from '../Item';

const Component: FC<IProps> = ({ className, style, items }) => (
  <div className={cn(className, styles.events_items_collection)} style={style}>
    {items.map(({ key, ...item }) => (
      <EventsItem key={key} {...item} />
    ))}
  </div>
);

Component.displayName = 'EventsItemsCollection';

export const EventsItemsCollection = memo(Component);
