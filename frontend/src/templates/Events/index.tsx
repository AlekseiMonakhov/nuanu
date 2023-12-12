import { FC, useEffect } from 'react';
import { StoriesFullScreen } from '@/components/Stories/FullScreen';
import { Footer } from '@/layout/Footer';
import store from '@/store/store';
import { headerSlice } from '@/store/reducers/header';
import { useTemplate } from '../_hooks/useTemplate';
import styles from './styles.module.scss';
import { IEvents } from './types';
import { EventsGroupedItemsCollection } from './components/GroupedItemsCollection';

const Events: FC<IEvents> = ({ stories, items }) => {
  useTemplate();

  useEffect(() => {
    store.dispatch(headerSlice.actions.setTheme('dark'));

    return () => {
      store.dispatch(headerSlice.actions.setDefaultTheme());
    };
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.screen}>
        <StoriesFullScreen className={styles.stories} {...stories} />

        <div className={styles.filters} />
      </div>

      <EventsGroupedItemsCollection items={items} />

      <Footer theme="dark" />
    </div>
  );
};

export default Events;
