import { FC } from 'react';
import { ArcArrowButton } from '@/components/Button/ArcArrow';
import cn from 'classnames';
import { IProps } from './types';
import { getInitialPosition } from './initialButtonPosition';
import styles from './styles.module.scss';

export const Button: FC<IProps> = ({ index, onClick, text }) => {
  const initialPosition = getInitialPosition(index);

  return (
    <ArcArrowButton
      tag="button"
      type="button"
      className={cn(
        styles.button,
        initialPosition?.arrow && styles.has_position,
      )}
      style={initialPosition?.style}
      text={text}
      arrowPosition={initialPosition?.arrow ?? 'bl'}
      onClick={onClick}
    />
  );
};
