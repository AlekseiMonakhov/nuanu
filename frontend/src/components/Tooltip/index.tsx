import { FC } from 'react';
import cn from 'classnames';
import { TagName } from '@anton.bobrov/nextjs-sp-helpers';
import { IProps } from './types';
import styles from './styles.module.scss';

export const Tooltip: FC<IProps> = ({
  className,
  style,
  tagName,
  text,
  children,
}) => (
  <TagName
    tagName={tagName}
    className={cn(className, styles.tooltip_container)}
    style={style}
  >
    {children}

    <span className={styles.tooltip} aria-hidden>
      {text}
    </span>
  </TagName>
);
