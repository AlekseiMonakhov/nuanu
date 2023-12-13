import type { NextApiRequest, NextApiResponse } from 'next';
import { PAGE_GLOBAL } from '@/mock/PAGE_GLOBAL';
import { TPageTemplateRegistryAPI } from '@/templates/Renderer';
import { MOCK_EVENTS } from '@/mock/EVENTS';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<TPageTemplateRegistryAPI>,
) => {
  res.json({
    global: PAGE_GLOBAL,

    templateName: 'Events/Index',

    template: {
      stories: {
        items: [
          {
            key: 0,
            media: {
              image: {
                original: '/lorem/events/stories/0.jpg',
                width: 0,
                height: 0,
                alt: '',
              },
              video: null,
            },
            theme: 'dark',
            label: 'Suara festival 2024',
            action: {
              kind: 'link',
              href: 'https://google.com/',
              target: '_blank',
              text: 'Buy tickets',
              sup: '$5',
            },
            title: 'Suara Festival',
            titleSize: 'large',
            description: '24 September 2024',
          },
          {
            key: 1,
            media: {
              image: {
                original: '/lorem/events/stories/1.jpg',
                width: 0,
                height: 0,
                alt: '',
              },
              video: null,
            },
            theme: 'dark',
            label: 'Suara festival 2024',
            action: {
              kind: 'link',
              href: 'https://google.com/',
              target: '_blank',
              text: 'Buy tickets',
              sup: '$5',
            },
            title: 'Suara Festival',
            titleSize: 'large',
            description: '24 September 2024',
          },
          {
            key: 2,
            media: {
              image: {
                original: '/lorem/events/stories/2.jpg',
                width: 0,
                height: 0,
                alt: '',
              },
              video: null,
            },
            theme: 'dark',
            label: 'Suara festival 2024',
            action: {
              kind: 'link',
              href: 'https://google.com/',
              target: '_blank',
              text: 'Buy tickets',
              sup: '$5',
            },
            title: 'Suara Festival',
            titleSize: 'large',
            description: '24 September 2024',
          },
        ],
      },

      items: MOCK_EVENTS,
    },
  });
};

export default handler;
