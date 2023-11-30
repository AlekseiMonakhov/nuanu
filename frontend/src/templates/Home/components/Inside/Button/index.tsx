import { FC, useRef } from 'react';
import { ArcArrowButton } from '@/components/Button/ArcArrow';
import cn from 'classnames';
import { IProps } from './types';
import { getInitialPosition } from './utils/initialPosition';
import styles from './styles.module.scss';
import { useActiveAnimation } from './utils/useActiveAnimation';

export const Button: FC<IProps> = ({
  index,
  isActive,
  onClick,
  text,
  targetPositionRef,
}) => {
  const buttonContainerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const initialPosition = getInitialPosition(index);

  useActiveAnimation({
    buttonContainerRef,
    buttonRef,
    targetPositionRef,
    isActive,
  });

  return (
    <div
      ref={buttonContainerRef}
      className={cn(
        styles.button_container,
        initialPosition?.arrow && styles.has_position,
        isActive && styles.active,
      )}
      style={initialPosition?.style}
    >
      <ArcArrowButton
        ref={buttonRef}
        tag="button"
        type="button"
        text={text}
        arrowPosition={initialPosition?.arrow ?? 'bl'}
        onClick={onClick}
        isActive={isActive}
      />
    </div>
  );
};
