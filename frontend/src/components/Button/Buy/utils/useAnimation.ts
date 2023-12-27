import { useTimeline } from '@anton.bobrov/react-vevet-hooks';
import { lerp } from '@anton.bobrov/vevet-init';
import { RefObject, useEffect } from 'react';

interface IProps {
  contentRef: RefObject<HTMLElement>;
  mainContentRef: RefObject<HTMLElement>;
  hoverContentRef: RefObject<HTMLElement>;
  isHovered?: boolean;
}

export function useAnimation({
  contentRef,
  mainContentRef,
  hoverContentRef,
  isHovered,
}: IProps) {
  const { play, reverse } = useTimeline({
    duration: 250,
    onProgress: ({ progress, easing }) => {
      const content = contentRef.current;
      const mainContent = mainContentRef.current;
      const hoverContent = hoverContentRef.current;

      if (!content || !mainContent || !hoverContent) {
        return;
      }

      if (progress === 0) {
        content.style.width = '';

        return;
      }

      const mainContentWidth = mainContent.clientWidth;
      const hoverContentWidth = hoverContent.clientWidth;

      const width = lerp(mainContentWidth, hoverContentWidth, easing);
      content.style.width = `${width}px`;
    },
  });

  useEffect(() => {
    if (isHovered) {
      play();
    } else {
      reverse();
    }
  }, [isHovered, play, reverse]);

  return { isHovered };
}
