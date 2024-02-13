import { TKey } from '@anton.bobrov/react-components';

export interface ILink {
  key: TKey;
  name: string;
  href: string;
}

export interface ILinkMenu extends ILink {
  isActive?: boolean;
  isHighlighted?: boolean;
  state?: null | 'new' | 'comingSoon';
}

export interface ILinksLanguage extends ILink {
  isActive?: boolean;
  fullName: string;
}
