import { FC, memo } from 'react';
import cn from 'classnames';
import { IProps } from './types';
import styles from './styles.module.scss';

const Component: FC<IProps> = ({ className, style, text, onClick }) => (
  <div
    className={cn(className, styles.navigation_button)}
    style={style}
    onClick={onClick}
    aria-hidden
  >
    <span>{text}</span>

    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.1 14.72L15.34 10.48L16.44 11.6L10.22 17.82L4 11.6L5.12 10.48L9.34 14.72V3H11.1V14.72Z"
        fill="currentColor"
      />
    </svg>
  </div>
);

export const NavigationButton = memo(Component);
