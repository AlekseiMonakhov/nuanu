import { useEvent, useOnInViewport } from '@anton.bobrov/react-hooks';
import { useAnimationFrame } from '@anton.bobrov/react-vevet-hooks';
import { DraggerMove, lerp, wrap } from '@anton.bobrov/vevet-init';
import { RefObject, useEffect, useRef } from 'react';

interface IProps {
  ref: RefObject<HTMLElement>;
  groupWidth: number;
}

export function useAnimation({ ref, groupWidth }: IProps) {
  const currentX = useRef(0);
  const targetX = useRef(currentX.current);

  const render = useEvent((easeMultiplier = 1) => {
    const children = Array.from(ref.current?.children ?? []) as HTMLElement[];
    if (children.length === 0) {
      return;
    }

    const ease = 0.1 * easeMultiplier;
    currentX.current = lerp(currentX.current, targetX.current, ease);

    const totalWidth = groupWidth * children.length;
    let left = 0;

    for (let index = 0; index < children.length; index += 1) {
      const x = wrap(
        -groupWidth,
        totalWidth - groupWidth,
        currentX.current + left,
      );
      children[index].style.transform = `translateX(${x}px)`;

      left += groupWidth;
    }
  });

  const { play, pause } = useAnimationFrame({
    onFrame: ({ easeMultiplier }) => {
      render(easeMultiplier);

      if (currentX.current === targetX.current) {
        pause();
      }
    },
  });

  useEffect(() => {
    if (!ref.current) {
      return undefined;
    }

    const handler = new DraggerMove({ container: ref.current });

    handler.addCallback('move', ({ step }) => {
      targetX.current += step.x * 1.5;

      play();
    });

    return () => handler.destroy();
  }, [play, ref]);

  const { state } = useOnInViewport({ ref });

  useEffect(() => {
    if (state === 'in') {
      play();
    } else {
      pause();
    }
  }, [state, play, pause]);

  useEffect(() => {
    if (groupWidth) {
      render();
    }
  }, [groupWidth, render]);
}
