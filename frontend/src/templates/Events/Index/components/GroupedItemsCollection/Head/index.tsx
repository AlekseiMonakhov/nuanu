import { FC } from 'react';
import cn from 'classnames';
import { useStoreLexicon } from '@/store/reducers/page';
import { IProps } from './types';
import styles from './styles.module.scss';

export const Head: FC<IProps> = ({
  className,
  style,
  name,
  isFirst,
  isLast,
  onPrevClick,
  onNextClick,
}) => {
  const { navigation: lexicon } = useStoreLexicon();

  return (
    <div className={cn(className, styles.head)} style={style}>
      <div>
        {!isFirst && (
          <button
            className={cn(styles.arrow, styles.prev)}
            type="button"
            onClick={onPrevClick}
            title={lexicon.previous}
            aria-label={lexicon.previous}
          />
        )}
      </div>

      <span className={styles.name}>{name}</span>

      <div>
        {!isLast && (
          <button
            className={cn(styles.arrow, styles.next)}
            type="button"
            onClick={onNextClick}
            title={lexicon.next}
            aria-label={lexicon.next}
          />
        )}
      </div>
    </div>
  );
};
