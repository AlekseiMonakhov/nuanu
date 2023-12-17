import { IBaseComponent } from '@anton.bobrov/react-components';
import { FC } from 'react';

export const IconDesktopCheck: FC<IBaseComponent> = ({ className, style }) => (
  <svg
    className={className}
    style={style}
    aria-hidden
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.5706 27.6513L30.0822 15.0007C30.5384 14.5395 30.5343 13.7957 30.073 13.3395C29.6118 12.8833 28.868 12.8874 28.4118 13.3487L16.7354 25.1548L12.0099 20.3768C11.5537 19.9155 10.8099 19.9114 10.3487 20.3676C9.88739 20.8238 9.88328 21.5676 10.3395 22.0288L15.9002 27.6513C16.1209 27.8744 16.4216 28 16.7354 28C17.0492 28 17.35 27.8744 17.5706 27.6513Z"
      fill="currentColor"
    />
  </svg>
);