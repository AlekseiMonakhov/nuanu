import { TPageTemplateRegistryAPI } from '@/templates/Renderer';
import { MOCK_GET_PAGE_GLOBAL } from '../../GET_PAGE_GLOBAL';
import { MOCK_EVENTS } from './EVENTS';

export function MOCK_PAGES_EVENTS(path: string): TPageTemplateRegistryAPI {
  const PAGE_GLOBAL = MOCK_GET_PAGE_GLOBAL({
    templateName: 'Accommodation',
    path,
  });

  return {
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

      bannerAdd: {
        title: 'Host your own event at <br />Nuanu in {month}',
        href: 'https://google.com/',
        image: {
          original: '/lorem/events/add_event.jpg',
          width: 1284,
          height: 1056,
          alt: 'add event',
        },
      },
    },
  };
}
