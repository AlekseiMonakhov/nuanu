export interface IPropertyProps {
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
  image: string; 
}

export interface IPropertiesProps {
  properties: IPropertyProps[];
}