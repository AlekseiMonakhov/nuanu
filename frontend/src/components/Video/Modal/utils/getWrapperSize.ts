import { TGetBaseVideoModalWrapperSize } from '@anton.bobrov/react-components';
import { vevet } from '@anton.bobrov/vevet-init';

export const getWrapperSize: TGetBaseVideoModalWrapperSize = () => {
  const { viewport } = vevet;

  const maxWidth = viewport.isPhone
    ? viewport.width - 30
    : viewport.width * 0.88;
  const maxHeight = viewport.height - 121;

  let height = maxHeight;
  let width = height * (1 / 0.5625);
  if (width > maxWidth) {
    width = maxWidth;
    height = maxWidth * 0.5625;
  }
  if (width > 1800) {
    width = 1800;
    height = 1800 * 0.5625;
  }

  return { width, height };
};
