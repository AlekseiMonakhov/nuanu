import { IBaseComponent } from '@anton.bobrov/react-components';
import { FC } from 'react';

interface IProps extends IBaseComponent {}

export const PlayDesktop: FC<IProps> = ({ className, style }) => (
  <svg
    className={className}
    style={style}
    width="17"
    height="20"
    viewBox="0 0 17 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.0103 8.26915C17.3409 9.03948 17.3409 10.9605 16.0103 11.7309L3.00207 19.262C1.66874 20.0339 -9.50479e-07 19.0718 -8.77522e-07 17.5311L-1.64266e-07 2.46889C-9.13094e-08 0.92823 1.66874 -0.0338876 3.00207 0.738041L16.0103 8.26915Z"
      fill="currentColor"
    />
  </svg>
);
