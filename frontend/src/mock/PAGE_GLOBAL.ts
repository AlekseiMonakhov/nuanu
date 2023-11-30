import { DeepRequired } from 'ts-essentials';
import { IPageGlobal } from '@/types/Page';

export const PAGE_GLOBAL: DeepRequired<IPageGlobal> = {
  lang: 'en',
  dir: 'ltr',

  meta: {
    pagetitle: 'Nuanu',
    description: '',
    keywords: '',
    image: '',
    searchable: true,
    cacheable: true,
  },

  links: {
    home: '/',
    privacyPolicy: '/privacy-policy',
  },

  languages: [
    { key: 'en', name: 'En', fullName: 'English', href: '/en', isActive: true },
  ],

  menu: [
    {
      key: 0,
      name: 'City',
      href: '/',
      isActive: true,
      isHighlighted: false,
    },
    {
      key: 2,
      name: 'Events',
      href: '/events',
      isActive: false,
      isHighlighted: true,
    },
    {
      key: 3,
      name: 'Accommodation',
      href: '/accomodation',
      isActive: false,
      isHighlighted: false,
    },
    {
      key: 4,
      name: 'Art',
      href: '/art',
      isActive: false,
      isHighlighted: false,
    },
    {
      key: 5,
      name: 'Experience',
      href: '/experience',
      isActive: false,
      isHighlighted: false,
    },
  ],

  breadcrumbs: [{ id: 0, href: '/', name: 'Home' }],

  social: [
    {
      key: 0,
      name: 'Instagram',
      href: 'https://www.instagram.com/nuanu_city/',
    },
    {
      key: 1,
      name: 'YouTube',
      href: 'https://www.youtube.com/channel/UCJlbN85VyTM13qupIP_9hdw',
    },
    {
      key: 2,
      name: 'Facebook',
      href: 'https://www.facebook.com/nuanu.city',
    },
    {
      key: 3,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/nuanu/',
    },
  ],
};
