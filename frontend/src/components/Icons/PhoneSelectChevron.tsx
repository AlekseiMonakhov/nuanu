import { IBaseComponent } from '@anton.bobrov/react-components';
import { FC } from 'react';

export const IconPhoneSelectChevron: FC<IBaseComponent> = ({
  className,
  style,
}) => (
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
      d="M16.6757 8.26285C17.0828 8.63604 17.1103 9.26861 16.7371 9.67573L11.2371 15.6757C11.0477 15.8824 10.7803 16 10.5 16C10.2197 16 9.95225 15.8824 9.76284 15.6757L4.26284 9.67573C3.88965 9.26861 3.91715 8.63604 4.32427 8.26285C4.73139 7.88966 5.36396 7.91716 5.73715 8.32428L10.5 13.5201L15.2628 8.32428C15.636 7.91716 16.2686 7.88966 16.6757 8.26285Z"
      fill="currentColor"
    />
  </svg>
);
