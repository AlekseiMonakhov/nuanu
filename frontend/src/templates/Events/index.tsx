import { FC, useEffect, useState } from 'react';
import { StoriesFullScreen } from '@/components/Stories/FullScreen';
import { Footer } from '@/layout/Footer';
import store from '@/store/store';
import { headerSlice } from '@/store/reducers/header';
import cn from 'classnames';
import { useTemplate } from '../_hooks/useTemplate';
import styles from './styles.module.scss';
import { IEvents } from './types';
import { EventsGroupedItemsCollection } from './components/GroupedItemsCollection';
import { EventsFilters } from './components/Filters';
import { useFilters } from './utils/useFilters';
import { useFilteredItems } from './utils/useFilteredItems';

const Events: FC<IEvents> = ({ stories, items: itemsProp }) => {
  useTemplate();

  useEffect(() => {
    store.dispatch(headerSlice.actions.setTheme('dark'));

    return () => {
      store.dispatch(headerSlice.actions.setDefaultTheme());
    };
  }, []);

  const [isFitlersOpened, setIsFitlersOpened] = useState(false);

  const filters = useFilters(itemsProp);

  const [activeFilters, setActiveFilters] = useState<Record<string, string>>(
    {},
  );

  const items = useFilteredItems(itemsProp, activeFilters);

  return (
    <div className={styles.page}>
      <div className={styles.screen}>
        <StoriesFullScreen className={styles.stories} {...stories} />

        <EventsFilters
          className={styles.filters}
          filters={filters}
          onFiltersOpen={() => setTimeout(() => setIsFitlersOpened(true), 0)}
          onFiltersClose={() => setIsFitlersOpened(false)}
          onChange={setActiveFilters}
        />
      </div>

      <EventsGroupedItemsCollection
        className={cn(styles.items, isFitlersOpened && styles.darken)}
        items={items}
      />

      <Footer theme="dark" />
    </div>
  );
};

export default Events;
