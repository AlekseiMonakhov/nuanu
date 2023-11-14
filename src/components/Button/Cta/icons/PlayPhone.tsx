import { IBaseComponent } from '@anton.bobrov/react-components';
import { FC } from 'react';

interface IProps extends IBaseComponent {}

export const PlayPhone: FC<IProps> = ({ className, style }) => (
  <svg
    className={className}
    style={style}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.1417 8.28501C15.4364 9.06182 15.4364 10.9382 14.1417 11.715L5.02899 17.1826C3.69594 17.9824 2 17.0222 2 15.4676L2 4.53238C2 2.97779 3.69594 2.01756 5.02899 2.81739L14.1417 8.28501Z"
      fill="currentColor"
    />
  </svg>
);
