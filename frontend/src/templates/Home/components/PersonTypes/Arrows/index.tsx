import { FC } from 'react';
import cn from 'classnames';
import { useStoreLexicon } from '@/store/reducers/page';
import { IProps } from './types';
import styles from './styles.module.scss';

export const Arrows: FC<IProps> = ({
  className,
  style,
  isPrevDisabled,
  isNextDisabled,
  onPrevClick,
  onNextClick,
}) => {
  const { navigation: lexicon } = useStoreLexicon();

  return (
    <div className={cn(className, styles.arrows)} style={style}>
      <button
        className={cn(styles.button, styles.prev)}
        type="button"
        onClick={onPrevClick}
        title={lexicon.previous}
        aria-label={lexicon.previous}
        disabled={isPrevDisabled}
      />

      <button
        className={cn(styles.button, styles.next)}
        type="button"
        onClick={onNextClick}
        title={lexicon.next}
        aria-label={lexicon.next}
        disabled={isNextDisabled}
      />
    </div>
  );
};
