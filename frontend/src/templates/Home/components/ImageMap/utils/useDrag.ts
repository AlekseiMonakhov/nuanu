import { useEvent } from '@anton.bobrov/react-hooks';
import { RefObject, useEffect, useRef } from 'react';
import { useAnimationFrame } from '@anton.bobrov/react-vevet-hooks';
import { DraggerMove, lerp, vevet } from '@anton.bobrov/vevet-init';
import { useDatGUISettings } from '@anton.bobrov/react-dat-gui';
import { useMapDimensions } from './useMapDimensions';

interface IWithLerp {
  current: number;
  target: number;
}

interface IProps {
  name: string;
  containerRef: RefObject<HTMLElement>;
  draggableSceneRef: RefObject<HTMLElement>;
  sourceWidth: number;
  sourceHeight: number;
  isDraggable: boolean;
}

export function useDrag({
  name,
  containerRef,
  draggableSceneRef,
  sourceWidth,
  sourceHeight,
  isDraggable,
}: IProps) {
  const xRef = useRef<IWithLerp>({ current: 0, target: 0 });
  const yRef = useRef<IWithLerp>({ current: 0, target: 0 });

  const { settings } = useDatGUISettings({
    name: `${name} dragger`,
    settings: {
      ease: { value: 0.2, type: 'number', min: 0, max: 1, step: 0.001 },
      friction: { value: 1, type: 'number', min: 0, max: 1, step: 0.001 },
    },
  });

  const dimensions = useMapDimensions({
    containerRef,
    sourceWidth,
    sourceHeight,
  });

  /** Calculate coordinates */
  const calcCoords = useEvent(() => {
    const x = xRef.current;
    const y = yRef.current;

    const { friction } = settings;
    const ease = vevet.isMobile ? 1 : settings.ease;

    if (Math.abs(x.target) > Math.abs(dimensions.xLine / 2)) {
      x.target = lerp(
        x.target,
        (x.target < 0 ? -dimensions.xLine : dimensions.xLine) / 2,
        friction,
      );
    }

    if (Math.abs(y.target) > Math.abs(dimensions.yLine / 2)) {
      y.target = lerp(
        y.target,
        (y.target < 0 ? -dimensions.yLine : dimensions.yLine) / 2,
        friction,
      );
    }

    x.current = lerp(x.current, x.target, ease);
    y.current = lerp(y.current, y.target, ease);

    if (x.current === x.target && y.current === y.target) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      pause();
    }
  });

  /** Render scene */
  const render = useEvent(() => {
    const scene = draggableSceneRef.current;

    if (!scene) {
      return;
    }

    calcCoords();

    scene.style.transform = `translate3d(${xRef.current.current}px, ${yRef.current.current}px, 0)`;
  });

  const { play, pause } = useAnimationFrame({
    onFrame: render,
  });

  // resize scene
  useEffect(() => {
    const scene = draggableSceneRef.current;
    if (!scene) {
      return;
    }

    scene.style.position = 'absolute';
    scene.style.top = '50%';
    scene.style.left = '50%';
    scene.style.width = `${dimensions.width}px`;
    scene.style.height = `${dimensions.height}px`;
    scene.style.marginLeft = `${dimensions.width / -2}px`;
    scene.style.marginTop = `${dimensions.height / -2}px`;

    play();
  }, [dimensions.height, dimensions.width, draggableSceneRef, play]);

  useEffect(() => {
    if (!containerRef.current || !isDraggable) {
      return undefined;
    }

    const dragger = new DraggerMove({ container: containerRef.current });

    dragger.addCallback('move', ({ step }) => {
      xRef.current.target += step.x;
      yRef.current.target += step.y;

      play();
    });

    return () => dragger.destroy();
  }, [containerRef, play, isDraggable]);
}
