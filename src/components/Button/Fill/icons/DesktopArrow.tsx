import { IBaseComponent } from '@anton.bobrov/react-components';
import { FC } from 'react';

export const DesktopArrow: FC<IBaseComponent> = (props) => (
  <svg
    {...props}
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.1082 10L20.8514 11.2704L28.4848 18.9491H8V21.048L28.4802 21.0482L20.8535 28.7573L22.1053 30L32 19.9985L22.1082 10Z"
      fill="currentColor"
    />
  </svg>
);
