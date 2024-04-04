import { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { IProps } from './types';
import styles from './styles.module.scss';

export const FooterLink: FC<IProps> = ({
  className,
  style,
  href,
  children,
  ...props
}) => (
  <Link
    className={cn(className, styles.footer_link)}
    style={style}
    href={href}
    {...props}
  >
    {children}

    <svg
      className={styles.arrow}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.9999 27.0001L23.9999 27.0001L23.9999 17.5L13.9999 28L12.4999 26.5L22.4999 16L13 16V14L26 14L25.9999 27.0001Z"
        fill="currentColor"
      />
    </svg>
  </Link>
);
