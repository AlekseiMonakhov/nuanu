import { StaticImageData } from "next/image";

export interface CardProps {
  name: string;
  title: string;
  villas: number;
  apartments: number;
  startingPrice: number;
  totalArea: number;
  roomSizes: number[];
  roi: string;
  occupancy: string;
  delivery: string;
  image: StaticImageData;
}