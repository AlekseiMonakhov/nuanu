import { IBaseComponent } from '@anton.bobrov/react-components';
import { FC } from 'react';

export const IconPhoneCheck: FC<IBaseComponent> = ({ className, style }) => (
  <svg
    className={className}
    style={style}
    aria-hidden
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.2328 5.31955C18.6086 5.72426 18.5852 6.35699 18.1805 6.7328L8.48815 15.7328C8.10447 16.0891 7.51093 16.0891 7.12725 15.7328L2.81955 11.7328C2.41484 11.357 2.39141 10.7243 2.76721 10.3196C3.14301 9.91484 3.77574 9.89141 4.18046 10.2672L7.8077 13.6354L16.8196 5.26721C17.2243 4.89141 17.857 4.91484 18.2328 5.31955Z"
      fill="currentColor"
    />
  </svg>
);
