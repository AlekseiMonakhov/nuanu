import { TDynamicImageProps } from '@/components/Media/DynamicImage/types';

export type TEventLocation = {
  name: string;
  address: string;
  lat: number;
  lng: number;
};

export type TEventOrganizer = {
  name: string;
  href?: string;
};

export interface IEventSharedProps {
  href: string;
  image: TDynamicImageProps;
  startTime: string;
  endTime?: string;
  type?: string;
  tags?: string[];
  /** nl2br */
  title?: string;
  location?: TEventLocation;
  price?: string | null;
  minAge?: string | null;
  organizer?: TEventOrganizer | null;
  buyHref?: string | null;
}
