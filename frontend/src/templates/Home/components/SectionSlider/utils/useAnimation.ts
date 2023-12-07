/* eslint-disable no-param-reassign */
import { useDatGUISettings } from '@anton.bobrov/react-dat-gui';
import { useEvent } from '@anton.bobrov/react-hooks';
import { clamp, SlideProgress, vevet } from '@anton.bobrov/vevet-init';
import { RefObject, useEffect, useState } from 'react';
import { usePageScrollLock } from './usePageScrollLock';

interface IProps {
  ref: RefObject<HTMLElement>;
  containerRef: RefObject<HTMLElement>;
  belowRef: RefObject<HTMLElement>;
  length: number;
  name: string;
  onHide: () => void;
  onStep: (step: number) => void;
}

const SETTINGS = {
  ease: 0.1,
  friction: 0.5,
  wheelSpeed: 2,
  dragSpeed: 3,
};

export function useAnimation({
  ref,
  containerRef,
  belowRef,
  length,
  name,
  onHide: onHideProp,
  onStep: onStepProp,
}: IProps) {
  const [handler, setHandler] = useState<SlideProgress | null>(null);

  const [isPageScrollLocked, setIsPageScrollLocked] = useState(true);

  const onHide = useEvent(onHideProp);
  const onStep = useEvent(onStepProp);

  usePageScrollLock(isPageScrollLocked);

  useDatGUISettings({
    name: `${name} Progress Handler`,
    settings: {
      ease: {
        value: SETTINGS.ease,
        type: 'number',
        min: 0,
        max: 0.5,
        step: 0.001,
      },
      friction: {
        value: SETTINGS.friction,
        type: 'number',
        min: 0,
        max: 1,
        step: 0.001,
      },
      wheelSpeed: {
        value: SETTINGS.wheelSpeed,
        type: 'number',
        min: 0,
        max: 4,
        step: 0.001,
      },
      dragSpeed: {
        value: SETTINGS.dragSpeed,
        type: 'number',
        min: 0,
        max: 4,
        step: 0.001,
      },
    },
    onChange: ({ ease, friction, wheelSpeed }) => {
      handler?.changeProps({ ease, friction, wheelSpeed });
    },
  });

  const togglePageScrollLock = useEvent((isLocked: boolean) => {
    if (isLocked) {
      if (isPageScrollLocked) {
        setIsPageScrollLocked(false);
      }
    } else if (!isPageScrollLocked) {
      setIsPageScrollLocked(true);
    }
  });

  const onEndProgress = useEvent((progress: number) => {
    if (!belowRef.current) {
      return;
    }

    belowRef.current.style.opacity = `${progress}`;

    // TODO
    // network performance fix
    // for images not to be loaded at once
    // belowRef.current.style.paddingTop = progress === 0 ? '' : '0';
  });

  const render = useEvent(() => {
    const container = containerRef.current;
    if (!handler || !container) {
      return;
    }

    const endProgress = clamp(handler.progress - length + 1, [0, 1]);
    onEndProgress(endProgress);

    container.style.transform = `translate(0, ${endProgress * -100}%)`;

    togglePageScrollLock(endProgress > 0.98);

    if (endProgress >= 1) {
      onHide();
    }
  });

  useEffect(() => {
    if (!ref.current) {
      return undefined;
    }

    const instance = new SlideProgress({
      ...SETTINGS,
      container: ref.current,
      min: 0,
      max: length,
      step: 1,
      hasDrag: vevet.isMobile,
    });

    setHandler(instance);

    instance.addCallback('render', () => render());
    instance.addCallback('step', () => onStep(instance.steppedProgress));

    return () => instance.destroy();
  }, [length, onStep, ref, render]);

  return { handler };
}
