import { FC, useRef } from 'react';
import { useScopedTimelineProgress } from '@anton.bobrov/react-vevet-hooks';
import { ButtonSimple } from '@/components/Button/Simple';
import store from '@/store/store';
import { menuSlice } from '@/store/reducers/menu';
import { useStoreLexicon } from '@/store/reducers/page';
import { IWithTimeline } from '../types';
import styles from './styles.module.scss';

export const MenuModalCloseButton: FC<IWithTimeline> = ({
  timeline,
  scope,
}) => {
  const lexicon = useStoreLexicon();

  const ref = useRef<HTMLButtonElement>(null);

  useScopedTimelineProgress({
    onProgress: ({ easing }) => {
      const element = ref.current;
      if (!element) {
        return;
      }

      element.style.opacity = `${easing}`;
    },
    timeline,
    scope,
  });

  return (
    <ButtonSimple
      ref={ref}
      tag="button"
      type="button"
      className={styles.close_button}
      text={lexicon.menu.close}
      onClick={() => store.dispatch(menuSlice.actions.close())}
    />
  );
};
