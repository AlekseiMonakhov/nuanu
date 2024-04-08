import { StaticImageData } from "next/image";

export type CardProps = {
  src: StaticImageData;
  alt: string;
  title: string;
  city: string;
  area: string; // площадь, например "120 m² / 210 m²"
  details: string; // детали, например "12 villas • 15 apartments"
};
