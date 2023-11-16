import type { NextApiRequest, NextApiResponse } from 'next';
import { PAGE_GLOBAL } from '@/mock/PAGE_GLOBAL';
import { TPageTemplateRegistryAPI } from '@/templates/Renderer';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<TPageTemplateRegistryAPI>,
) => {
  res.json({
    global: PAGE_GLOBAL,

    templateName: 'Home',

    template: {
      stories: {
        items: [
          {
            key: 0,
            image: {
              original: '',
              thumb: '/lorem/home/stories/0.jpg',
              thumbWebp: '',
              sizes: {
                640: '',
                750: '',
                1024: '',
                1440: '',
                1920: '',
                2560: '',
              },
              sizesWebp: {
                640: '',
                750: '',
                1024: '',
                1440: '',
                1920: '',
                2560: '',
              },
            },
            video: null,
            contentTheme: 'dark',
            label: 'City of the future',
            action: {
              kind: 'video_modal',
              player: {
                source: 'mp4',
                src: '/lorem/video.mp4',
                id: '',
              },
              duration: '2:09',
            },
            title: 'Changing the way we live, work & play',
            description: `Nuanu isn't just a city in Bali's heart; it's a blend of modernity and tradition, embodying urban living in harmony with nature${''}`,
          },
          {
            key: 1,
            image: {
              original: '',
              thumb: '/lorem/home/stories/1.jpg',
              thumbWebp: '',
              sizes: {
                640: '',
                750: '',
                1024: '',
                1440: '',
                1920: '',
                2560: '',
              },
              sizesWebp: {
                640: '',
                750: '',
                1024: '',
                1440: '',
                1920: '',
                2560: '',
              },
            },
            video: null,
            contentTheme: 'dark',
            label: 'Some label',
            action: {
              kind: 'link',
              href: 'https://google.com/',
              target: '_blank',
              text: 'Apply now',
            },
            title: 'Some Title',
            description: '',
          },
          {
            key: 2,
            image: {
              original: '',
              thumb: '/lorem/home/stories/2.jpg',
              thumbWebp: '',
              sizes: {
                640: '',
                750: '',
                1024: '',
                1440: '',
                1920: '',
                2560: '',
              },
              sizesWebp: {
                640: '',
                750: '',
                1024: '',
                1440: '',
                1920: '',
                2560: '',
              },
            },
            video: null,
            contentTheme: 'dark',
            label: 'Suara festival 2024 Open Call',
            action: null,
            title: 'Suara festival 2024 Open Call',
            description:
              'Open to artists, architects and cultural workers, we provide grants to help you realize your vision',
          },
          {
            key: 3,
            image: {
              original: '',
              thumb: '/lorem/home/stories/3.jpg',
              thumbWebp: '',
              sizes: {
                640: '',
                750: '',
                1024: '',
                1440: '',
                1920: '',
                2560: '',
              },
              sizesWebp: {
                640: '',
                750: '',
                1024: '',
                1440: '',
                1920: '',
                2560: '',
              },
            },
            video: null,
            contentTheme: 'light',
            label: 'City of the future',
            action: {
              kind: 'video_modal',
              player: {
                source: 'yt',
                src: '',
                id: 'BFS9n4B_2xA',
              },
              duration: '2:02',
            },
            title: 'Changing the way we live, work & play',
            description: `Nuanu isn't just a city in Bali's heart; it's a blend of modernity and tradition, embodying urban living in harmony with nature${''}`,
          },
        ],
      },
    },
  });
};

export default handler;
