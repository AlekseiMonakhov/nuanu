import { FC } from 'react';
import cn from 'classnames';
import { useStoreGlobal, useStoreLexicon } from '@/store/reducers/page';
import Link from 'next/link';
import { IProps } from './types';
import styles from './styles.module.scss';

export const BackButton: FC<IProps> = ({ className, style }) => {
  const { links } = useStoreGlobal();
  const { events: lexicon } = useStoreLexicon();

  return (
    <Link
      href={links.events}
      className={cn(className, styles.back_button)}
      style={style}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="20" fill="#F2F2F2" />
        <path
          d="M15.1377 19.1511L19.4291 15.0611L18.2955 14L12 20L18.2955 26L19.4291 24.9196L15.1377 20.8489H27V19.1511H15.1377Z"
          fill="#212121"
        />
      </svg>

      {lexicon.events}
    </Link>
  );
};
