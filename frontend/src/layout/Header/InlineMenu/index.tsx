import { FC } from 'react';
import cn from 'classnames';
import { IProps } from './types';
import styles from './styles.module.scss';
import { HeaderMenuLinks } from '../MenuLinks';

export const HeaderInlineMenu: FC<IProps> = ({ className, style }) => (
  <HeaderMenuLinks
    className={cn(className, styles.header_inline_menu)}
    style={style}
    hasTooltips
  />
);
