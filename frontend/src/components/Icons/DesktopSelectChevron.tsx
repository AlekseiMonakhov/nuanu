import { IBaseComponent } from '@anton.bobrov/react-components';
import { FC } from 'react';

export const IconDesktopSelectChevron: FC<IBaseComponent> = ({
  className,
  style,
}) => (
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
      d="M28.8719 14.5606C29.3324 14.0597 30.1215 14.0556 30.5872 14.5515C31.0103 15.0021 31.0103 15.7039 30.5872 16.1544L21.7273 25.5891C21.3323 26.0097 20.6644 26.0097 20.2694 25.5891L11.3942 16.1382C10.9779 15.6948 10.9748 15.0051 11.3871 14.558C11.8463 14.0602 12.6326 14.06 13.0919 14.5578L20.9981 23.1251L28.8719 14.5606Z"
      fill="currentColor"
    />
  </svg>
);
