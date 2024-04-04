import { FC } from 'react';
import cn from 'classnames';
import { RichText } from '@/components/Typography/RichText';
import { IProps } from './types';
import styles from './styles.module.scss';

export const Text: FC<IProps> = ({ className, style, text }) => (
  <RichText className={cn(className, styles.text)} style={style} html={text} />
);
