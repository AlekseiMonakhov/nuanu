import { useEvent } from '@anton.bobrov/react-hooks';
import { Timeline, lerp } from '@anton.bobrov/vevet-init';
import { useEffect, useRef, useState } from 'react';

interface IProps {
  value: number;
  onRender: (progress: number) => void;
}

export function useSync({ value, onRender: onRenderProp }: IProps) {
  const currentProgress = useRef(0);

  const [isAnimating, setIsAnimating] = useState(false);

  const onRender = useEvent(onRenderProp);

  // animate
  useEffect(() => {
    const start = currentProgress.current;
    const end = value;

    if (start === end) {
      return undefined;
    }

    setIsAnimating(true);

    const timeline = new Timeline({ duration: 750 });

    timeline.addCallback('progress', ({ easing }) => {
      currentProgress.current = lerp(start, end, easing);
      onRender(currentProgress.current);
    });

    timeline.addCallback('end', () => setIsAnimating(false));

    timeline.play();

    return () => {
      setIsAnimating(false);
      timeline.destroy();
    };
  }, [onRender, value]);

  return { isAnimating };
}
