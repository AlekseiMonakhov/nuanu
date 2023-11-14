import { FC, memo } from 'react';
import { IModalAnchorProps, ModalAnchor } from '@anton.bobrov/react-components';
import { VideoModal } from '.';

const Modal = memo(VideoModal);

interface IProps extends Omit<IModalAnchorProps<typeof Modal>, 'modal'> {}

export const VideoModalAnchor: FC<IProps> = ({ anchor, ...props }) => (
  <ModalAnchor {...props} anchor={anchor} modal={Modal} />
);
