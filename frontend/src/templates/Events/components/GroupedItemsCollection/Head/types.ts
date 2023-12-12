export interface IProps {
  name: string;
  isFirst: boolean;
  isLast: boolean;
  onPrevClick: () => void;
  onNextClick: () => void;
}
