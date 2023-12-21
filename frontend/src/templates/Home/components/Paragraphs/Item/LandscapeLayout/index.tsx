import { FC, memo } from 'react';
import cn from 'classnames';
import { TActionButtonRenderer } from '@/components/Button/Action/types';
import { ArrowButton } from '@/components/Button/Arrow';
import { MediaVideoOrImage } from '@/components/Media/VideoOrImage';
import { ActionButton } from '@/components/Button/Action';
import { IProps } from './types';
import styles from './styles.module.scss';
import { Factoids } from '../Factoids';
import { Content } from '../Content';

const RenderAction: TActionButtonRenderer = (props) => (
  <ArrowButton {...(props as any)} theme="light" size={120} />
);

const RenderActionMemo = memo(RenderAction);

export const LandscapeLayout: FC<IProps> = ({
  className,
  style,
  index,
  isLarge,
  isReverse,
  media,
  factoids,
  action,
  title,
  description,
}) => (
  <article
    className={cn(
      className,
      styles.layout,
      isReverse && styles.reverse,
      isLarge && styles.large,
    )}
    style={style}
  >
    <div className={styles.aside}>
      <div className={styles.aside__factoids}>
        {factoids && <Factoids items={factoids} index={index} />}
      </div>

      <div className={styles.aside__media}>
        <div className={styles.media}>
          <MediaVideoOrImage {...media} placeholderTheme="light" />
        </div>
      </div>
    </div>

    <Content className={styles.content} title={title} description={description}>
      {action && (
        <ActionButton
          action={action}
          renderButton={RenderActionMemo}
          buttonProps={{ className: styles.action }}
        />
      )}
    </Content>
  </article>
);
