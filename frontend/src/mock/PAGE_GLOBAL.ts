import { TPageTemplateRegistryAPI } from '@/templates/Renderer';
import { IPageGlobal } from '@/types/Page';
import { NextApiRequest } from 'next';
import { DeepRequired } from 'ts-essentials';

interface IProps {
  req: NextApiRequest;
  templateName: TPageTemplateRegistryAPI['templateName'];
}

export const GET_PAGE_GLOBAL = ({
  templateName,
}: IProps): DeepRequired<IPageGlobal> => ({
  lang: 'en',
  dir: 'ltr',

  meta: {
    pagetitle: 'Nuanu',
    description: '',
    keywords: '',
    image: '',
    searchable: true,
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
      isActive: templateName === 'Home',
      isHighlighted: false,
    },
    {
      key: 2,
      name: 'Events',
      href: '/events',
      isActive: templateName === 'Events/Index',
      isHighlighted: true,
    },
    {
      key: 3,
      name: 'Accommodation',
      href: '/accommodation',
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
});
