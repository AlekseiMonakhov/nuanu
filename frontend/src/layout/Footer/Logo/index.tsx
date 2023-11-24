import { FC } from 'react';
import { IProps } from './types';

export const FooterLogo: FC<IProps> = ({ className, style }) => (
  <svg
    className={className}
    style={style}
    width="41"
    height="30"
    viewBox="0 0 41 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.6721 5.83468C10.684 5.83468 5.91921 9.93863 5.91921 15.5104C5.91921 21.2318 10.2032 24.1653 14.0086 24.1653C17.7718 24.1653 22.0487 21.286 22.0487 16.0455H27.9679C27.9679 25.0999 20.4066 30 14.0086 30C7.25837 30 0 24.7649 0 15.5104C0 6.10684 8.06945 0 16.6721 0C29.8025 0 41 12.8223 41 28.833H35.0808C35.0808 15.087 25.64 5.83468 16.6721 5.83468Z"
      fill="currentColor"
    />
  </svg>
);
