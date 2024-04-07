// @ts-nocheck
import { FC } from 'react';
import cn from 'classnames';
import {
  BaseVideoModal,
  IBaseVideoModalProps,
} from '@anton.bobrov/react-components';
import styles from './styles.module.scss';
import { CloseButton } from './CloseButton';
import { getWrapperSize as getDefaultWrapperSize } from './utils/getWrapperSize';

export const VideoModal: FC<IBaseVideoModalProps> = ({
  className,
  overlayProps,
  wrapperProps,
  renderCloseButton = CloseButton,
  getWrapperSize = getDefaultWrapperSize,
  ...props
}) => (
  <BaseVideoModal
    {...props}
    className={cn(styles.video_modal, className)}
    overlayProps={{
      ...overlayProps,
      className: cn(overlayProps?.className, styles.overlay),
    }}
    wrapperProps={{
      ...wrapperProps,
      className: cn(wrapperProps?.className, styles.wrapper),
    }}
    renderCloseButton={renderCloseButton}
    getWrapperSize={getWrapperSize}
  />
);
