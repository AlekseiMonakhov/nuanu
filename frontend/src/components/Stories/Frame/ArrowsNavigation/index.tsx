import { FC, memo } from 'react';
import { useStoreLexicon } from '@/store/reducers/page';
import { IProps } from './types';
import styles from './styles.module.scss';

const Component: FC<IProps> = ({
  onNext,
  onPrev,
  controllableId,
  isDisabled,
}) => {
  const { navigation: lexicon } = useStoreLexicon();

  return (
    <>
      <button
        className={styles.prev}
        type="button"
        aria-label={lexicon.previous}
        onClick={() => !isDisabled && onPrev()}
        aria-controls={controllableId}
        aria-disabled={isDisabled}
      />

      <button
        className={styles.next}
        type="button"
        aria-label={lexicon.next}
        onClick={() => !isDisabled && onNext()}
        aria-controls={controllableId}
        aria-disabled={isDisabled}
      />
    </>
  );
};

export const StoriesFrameArrowsNavigation = memo(Component);
