import { useEvent } from '@anton.bobrov/react-hooks';
import { useOnResize, useTimeline } from '@anton.bobrov/react-vevet-hooks';
import { RefObject, useEffect } from 'react';

interface IProps {
  buttonContainerRef: RefObject<HTMLElement>;
  buttonRef: RefObject<HTMLElement>;
  targetPositionRef: RefObject<HTMLElement>;
  isActive: boolean;
}

export function useActiveAnimation({
  buttonContainerRef,
  buttonRef,
  targetPositionRef,
  isActive,
}: IProps) {
  const update = useEvent((progress: number) => {
    const target = targetPositionRef.current;
    const buttonContainer = buttonContainerRef.current;
    const button = buttonRef.current;

    if (!target || !buttonContainer || !button) {
      return;
    }

    const targetBounding = target.getBoundingClientRect();
    const containerBounding = buttonContainer.getBoundingClientRect();

    const x = (targetBounding.left - containerBounding.left) * progress;
    const y =
      (targetBounding.top -
        containerBounding.top -
        containerBounding.height -
        6) *
      progress;

    button.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });

  const { play, reverse } = useTimeline({
    duration: 500,
    onProgress({ easing }) {
      update(easing);
    },
  });

  useEffect(() => {
    if (isActive) {
      play();
    } else {
      reverse();
    }
  }, [isActive, play, reverse]);

  useOnResize(() => update(isActive ? 1 : 0), [isActive]);
}
