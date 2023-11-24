import { ILink } from '@/types/Link';

export interface IProps {
  title: string;
  links: ILink[];
  target?: '_blank';
}
