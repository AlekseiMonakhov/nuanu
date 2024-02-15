import { FC, useEffect, useRef, useState } from 'react';
import { StoriesFullScreen } from '@/components/Stories/FullScreen';
import { Footer } from '@/layout/Footer';
import cn from 'classnames';
import { useHeaderIntersectionTheme } from '@/utils/hooks/useHeaderIntersectionTheme';
import { useStoreLexicon, useStoreUrl } from '@/store/reducers/page';
import store from '@/store/store';
import { historySlice, useStoreHistory } from '@/store/reducers/history';
import { useEvent } from '@anton.bobrov/react-hooks';
import { useTemplate } from '../../_hooks/useTemplate';
import styles from './styles.module.scss';
import { IEvents } from './types';
import { EventsGroupedItemsCollection } from './components/GroupedItemsCollection';
import { EventsFilters } from './components/Filters';
import { useFilters } from './utils/useFilters';
import { useFilteredItems } from './utils/useFilteredItems';

const Events: FC<IEvents> = ({ stories, items: itemsProp, bannerAdd }) => {
  useTemplate();

  const storiesRef = useRef<HTMLElement>(null);
  useHeaderIntersectionTheme(storiesRef, 'dark', 'light');

  const { events: lexicon } = useStoreLexicon();
  const { href: url } = useStoreUrl();
  const { hasHistory, data: historyData } = useStoreHistory();

  const filters = useFilters(itemsProp);

  const [isFitlersOpened, setIsFitlersOpened] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>(
    hasHistory ? historyData?.object || {} : {},
  );

  const items = useFilteredItems(itemsProp, activeFilters);

  const saveHistory = useEvent(() => {
    store.dispatch(
      historySlice.actions.update({
        url,
        scrollTop: window.pageYOffset,
        object: activeFilters,
      }),
    );
  });

  useEffect(() => {
    if (hasHistory && historyData?.url === url) {
      window.scrollTo(0, historyData?.scrollTop || 0);
      store.dispatch(historySlice.actions.reset());
    }
  }, [hasHistory, historyData?.scrollTop, historyData?.url, url]);

  return (
    <div className={styles.page}>
      <div className={styles.screen}>
        <StoriesFullScreen
          ref={storiesRef}
          className={styles.stories}
          {...stories}
        />

        <EventsFilters
          className={styles.filters}
          filters={filters}
          defaultValues={activeFilters}
          onFiltersOpen={() => setTimeout(() => setIsFitlersOpened(true), 0)}
          onFiltersClose={() => setIsFitlersOpened(false)}
          onChange={(ddd) => {
            console.log(ddd);
            setActiveFilters(ddd);
          }}
        />
      </div>

      {items.length > 0 ? (
        <EventsGroupedItemsCollection
          className={cn(styles.items, isFitlersOpened && styles.darken)}
          items={items}
          bannerAdd={bannerAdd}
          onItemClick={() => saveHistory()}
        />
      ) : (
        <p className={styles.none}>{lexicon.none}</p>
      )}

      <Footer theme="dark" />
    </div>
  );
};

export default Events;
