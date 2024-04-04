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
      d="M26.2031 18.9747C27.2656 19.5818 27.2656 21.1138 26.2031 21.721L14.3662 28.4849C13.3119 29.0874 12 28.3261 12 27.1118L12 13.5839C12 12.3695 13.3119 11.6082 14.3662 12.2107L26.2031 18.9747Z"
      fill="currentColor"
    />
  </svg>
);
