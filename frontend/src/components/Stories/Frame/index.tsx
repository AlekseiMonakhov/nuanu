import { FC, memo, useState } from 'react';
import cn from 'classnames';
import { FadeContent } from '@anton.bobrov/react-components';
import { IProps } from './types';
import { StoriesBase } from '../Base';
import styles from './styles.module.scss';

const Component: FC<IProps> = ({ className, style, items }) => {
  const [activeKey, setActiveKey] = useState(items[0].key);

  return (
    <div className={cn(className, styles.stories_frame)} style={style}>
      <StoriesBase
        className={styles.base_stories}
        items={items}
        activeKey={activeKey}
        onActiveKey={setActiveKey}
        hasAutoChange
      />

      <div className={styles.content}>
        <FadeContent
          duration={350}
          activeKey={activeKey}
          content={items.map(({ key, title }) => ({
            key,
            children: title && (
              <p
                className={styles.title}
                dangerouslySetInnerHTML={{ __html: title }}
              />
            ),
          }))}
        />
      </div>
    </div>
  );
};

Component.displayName = 'StoriesFrame';

export const StoriesFrame = memo(Component);
