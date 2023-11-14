import { FC } from 'react';
import cn from 'classnames';
import { IProps } from './types';
import { StoriesFrame } from '../Frame';
import styles from './styles.module.scss';
import { TStoriesFrameNavigationRenderer } from '../Frame/types';
import { StoriesNavigation } from '../Frame/Navigation';

const Navigation: TStoriesFrameNavigationRenderer = (props) => (
  <StoriesNavigation {...props} className={styles.navigation} />
);

export const StoriesFullScreen: FC<IProps> = ({
  className,
  style,
  hasOverlay = true,
  ...props
}) => (
  <StoriesFrame
    className={cn(className, styles.stories_fullscreen)}
    hasOverlay={hasOverlay}
    {...props}
    renderNavigation={Navigation}
  />
);
