import { FC, useRef, useState } from 'react';
import cn from 'classnames';
import { useClientSize } from '@anton.bobrov/react-hooks';
import { vevet } from '@anton.bobrov/vevet-init';
import { useOnResize } from '@anton.bobrov/react-vevet-hooks';
import { IProps } from './types';
import styles from './styles.module.scss';

export const PortraitLayout: FC<IProps> = ({
  className,
  style,
  content,
  media,
  stats,
  action,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const actionRef = useRef<HTMLDivElement>(null);

  const { clientHeight: containerHeight } = useClientSize(containerRef);
  const { clientHeight: statsHeight } = useClientSize(statsRef);
  const { clientHeight: actionHeight } = useClientSize(actionRef);

  const [top, setTop] = useState(0);

  useOnResize(
    () => setTop(vevet.viewport.height - containerHeight),
    [containerHeight],
  );

  return (
    <article
      className={cn(className, styles.layout)}
      style={{ ...style, height: containerHeight + statsHeight }}
    >
      <div ref={containerRef} className={styles.container} style={{ top }}>
        <div className={styles.content}>{content}</div>

        <div ref={statsRef} className={styles.stats}>
          {stats}
        </div>

        <div ref={actionRef} className={styles.action}>
          {action}
        </div>
      </div>

      <div className={styles.media}>
        <div
          className={styles.media__container}
          style={{
            top: containerHeight - statsHeight - actionHeight,
            height: statsHeight,
          }}
        >
          {media}
        </div>
      </div>
    </article>
  );
};
