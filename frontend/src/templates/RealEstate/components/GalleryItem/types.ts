import { StaticImageData } from "next/image";

export interface GalleryItemProps {
    src: StaticImageData;
    title: string;
    subtitle: string;
    alt: string;
  }