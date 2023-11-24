import { StaticImageData } from 'next/image';
import { ReactElement } from 'react';

export interface IProps {
  datGuiName: string;
  imageJpg: StaticImageData;
  imageWebp: StaticImageData;
  alt: string;
  overlay: ReactElement;
}
