import { FC, memo } from 'react';
import cn from 'classnames';
import { IProps } from './types';
import styles from './styles.module.scss';
import { HomeParagraphsItem } from './Item';

const Component: FC<IProps> = ({ className, style, items }) => (
  <section className={cn(className, styles.home_paragraphs)} style={style}>
    {items.map(({ key, ...item }, index) => (
      <HomeParagraphsItem
        key={key}
        {...item}
        className={styles.item}
        index={index}
      />
    ))}
  </section>
);

Component.displayName = 'HomeParagraphs';

export const HomeParagraphs = memo(Component);
