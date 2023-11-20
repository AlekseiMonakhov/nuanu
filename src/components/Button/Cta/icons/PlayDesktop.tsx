import { IBaseComponent } from '@anton.bobrov/react-components';
import { FC } from 'react';

interface IProps extends IBaseComponent {}

export const PlayDesktop: FC<IProps> = ({ className, style }) => (
  <svg
    className={className}
    style={style}
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26.9611 18.2635C28.3048 19.0313 28.3048 20.9687 26.9611 21.7365L11.9923 30.2901C10.659 31.052 9 30.0893 9 28.5536L9 11.4464C9 9.91071 10.659 8.94798 11.9923 9.70987L26.9611 18.2635Z"
      fill="currentColor"
    />
  </svg>
);
