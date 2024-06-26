import { IBaseComponent } from '@anton.bobrov/react-components';
import { FC } from 'react';

export const PhoneArrow: FC<IBaseComponent> = (props) => (
  <svg
    {...props}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.8623 9.15112L9.57085 5.06109L10.7045 4L17 10L10.7045 16L9.57085 14.9196L13.8623 10.8489H2V9.15112H13.8623Z"
      fill="currentColor"
    />
  </svg>
);
