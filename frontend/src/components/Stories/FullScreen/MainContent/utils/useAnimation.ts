import { useEvent } from '@anton.bobrov/react-hooks';
import { Timeline, lerp } from '@anton.bobrov/vevet-init';
import { RefObject, useEffect, useRef } from 'react';

export interface IUseAnimationProps {
  isActive: boolean;
  direction: 'prev' | 'next' | undefined;
  onAnimationStart: () => void;
  onAnimationEnd: () => void;
}

interface IProps extends IUseAnimationProps {
  ref: RefObject<HTMLElement>;
}

const DURATION = 750;

export function useAnimation({
  isActive,
  direction,
  ref,
  onAnimationStart: onAnimationStartProp,
  onAnimationEnd: onAnimationEndProp,
}: IProps) {
  const isPrevActiveRef = useRef(isActive);

  const onAnimationStart = useEvent(onAnimationStartProp);
  const onAnimationEnd = useEvent(onAnimationEndProp);

  useEffect(() => {
    if (isActive === isPrevActiveRef.current) {
      return undefined;
    }

    const isPrevActive = isPrevActiveRef.current;
    isPrevActiveRef.current = isActive;

    onAnimationStart();

    const tm = new Timeline({ duration: DURATION });

    tm.addCallback('progress', ({ easing }) => {
      const element = ref.current;

      if (!element) {
        return;
      }

      let xStart = 0;
      if (!isPrevActive) {
        xStart = direction === 'next' ? 1 : -1;
      }

      let xTarget = 0;
      if (!isActive) {
        xTarget = direction === 'next' ? -1 : 1;
      }

      const x = lerp(xStart, xTarget, easing);
      const opacity = isActive ? easing : 1 - easing;

      element.style.transform = `translateX(${x * 2}rem)`;
      element.style.opacity = `${opacity}`;
    });

    tm.addCallback('end', () => onAnimationEnd());
    tm.addCallback('destroy', () => onAnimationEnd());

    const timeout = setTimeout(() => tm.play(), isActive ? DURATION * 0.3 : 0);

    return () => {
      clearTimeout(timeout);
      tm.destroy();
    };
  }, [direction, isActive, onAnimationEnd, onAnimationStart, ref]);
}
