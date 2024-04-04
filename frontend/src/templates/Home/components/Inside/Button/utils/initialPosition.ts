import { TArcArrowButtonArrowPosition } from '@/components/Button/ArcArrow/types';

interface IPosition {
  arrow: TArcArrowButtonArrowPosition;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

const initialPosition: IPosition[] = [
  { arrow: 'bl', bottom: 0.71145, left: 0.580813 },
  { arrow: 'br', bottom: 0.65284, right: 0.67151 },
  { arrow: 'tl', top: 0.480613, left: 0.12093 },
  { arrow: 'tr', top: 0.72858, right: 0.715116 },
  { arrow: 'bl', bottom: 0.50315, left: 0.486046 },
  { arrow: 'tr', top: 0.74752, right: 0.3 },
  { arrow: 'bl', bottom: 0.548241, left: 0.791279 },
];

export const getInitialPosition = (index: number) => {
  if (index >= initialPosition.length) {
    return undefined;
  }

  const { arrow, top, left, right, bottom } = initialPosition[index];

  const relativePosition = {
    arrow,
    style: {
      top: top ? `${top * 100}%` : undefined,
      left: left ? `${left * 100}%` : undefined,
      right: right ? `${right * 100}%` : undefined,
      bottom: bottom ? `${bottom * 100}%` : undefined,
    },
  };

  return relativePosition;
};
