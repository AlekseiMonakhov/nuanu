import { useClientSize } from '@anton.bobrov/react-hooks';
import { RefObject, useMemo } from 'react';

interface IProps {
  containerRef: RefObject<HTMLElement>;
  sourceWidth: number;
  sourceHeight: number;
}

export function useMapDimensions({
  containerRef,
  sourceWidth,
  sourceHeight,
}: IProps) {
  const { clientWidth, clientHeight } = useClientSize(containerRef);

  const coords = useMemo(() => {
    let width = clientWidth;
    let height = (sourceHeight * width) / sourceWidth;

    if (height < clientHeight) {
      height = clientHeight;
      width = (sourceWidth * height) / sourceHeight;
    }

    const xLine = Math.abs(clientWidth - width);
    const yLine = Math.abs(clientHeight - height);

    const x = (clientWidth - width) / 2;
    const y = (clientHeight - height) / 2;

    return { x, y, xLine, yLine, width, height };
  }, [clientHeight, clientWidth, sourceHeight, sourceWidth]);

  return coords;
}
