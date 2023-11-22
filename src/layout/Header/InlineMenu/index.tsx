import { FC } from 'react';
import cn from 'classnames';
import { useStoreLexicon } from '@/store/reducers/page';
import { IProps } from './types';
import styles from './styles.module.scss';
import { HeaderMenuLinks } from '../MenuLinks';

export const HeaderInlineMenu: FC<IProps> = ({ className, style }) => {
  const { menu: lexicon } = useStoreLexicon();

  return (
    <HeaderMenuLinks
      className={cn(className, styles.header_inline_menu)}
      style={style}
      aria-label={lexicon.label}
    />
  );
};
