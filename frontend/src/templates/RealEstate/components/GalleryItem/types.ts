import { StaticImageData } from "next/image";

export interface GalleryItemProps {
  src: StaticImageData;
  alt: string;
  title: string;
  subtitle: string;
  isHalfWidth?: boolean; 
  isNotRounded?: boolean; 
}
