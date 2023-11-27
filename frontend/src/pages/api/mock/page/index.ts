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
            media: {
              image: {
                original: '/lorem/home/stories/0.jpg',
                width: 900,
                height: 0,
                alt: '',
              },
              video: null,
            },
            theme: 'dark',
            label: 'City of the future',
            action: {
              kind: 'video_modal',
              player: {
                source: 'mp4',
                src: '/lorem/video.mp4',
                id: '',
              },
              duration: '2:09',
              text: 'Watch',
            },
            title: 'Changing the way we live, work & play',
            description: `Nuanu isn't just a city in Bali's heart; it's a blend of modernity and tradition, embodying urban living in harmony with nature${''}`,
          },
          {
            key: 1,
            media: {
              image: {
                original: '/lorem/home/stories/1.jpg',
                width: 0,
                height: 0,
                alt: '',
              },
              video: null,
            },
            theme: 'dark',
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
            media: {
              image: {
                original: '/lorem/home/stories/2.jpg',
                width: 0,
                height: 0,
                alt: '',
              },
              video: null,
            },
            theme: 'dark',
            label: 'Suara festival 2024 Open Call',
            action: null,
            title: 'Suara festival 2024 Open Call',
            description:
              'Open to artists, architects and cultural workers, we provide grants to help you realize your vision',
          },
          {
            key: 3,
            media: {
              image: {
                original: '/lorem/home/stories/3.jpg',
                width: 0,
                height: 0,
                alt: '',
              },
              video: null,
            },
            theme: 'light',
            label: 'City of the future',
            action: {
              kind: 'video_modal',
              player: {
                source: 'yt',
                src: '',
                id: 'BFS9n4B_2xA',
              },
              text: 'Watch',
              duration: '2:02',
            },
            title: 'Changing the way we live, work & play',
            description: `Nuanu isn't just a city in Bali's heart; it's a blend of modernity and tradition, embodying urban living in harmony with nature${''}`,
          },
        ],
      },

      longRead: {
        title: 'Changing the way we',
        items: [
          {
            key: 0,
            label: 'live',
            media: [
              {
                key: 0,
                image: {
                  original: '/lorem/home/longread/0.jpg',
                  width: 0,
                  height: 0,
                  alt: '',
                },
                video: null,
              },
              {
                key: 1,
                image: {
                  original: '/lorem/home/longread/1.jpg',
                  width: 0,
                  height: 0,
                  alt: '',
                },
                video: null,
              },
            ],
          },
          {
            key: 1,
            label: 'work',
            media: [
              {
                key: 0,
                image: {
                  original: '/lorem/home/longread/2.jpg',
                  width: 0,
                  height: 0,
                  alt: '',
                },
                video: null,
              },
              {
                key: 1,
                image: {
                  original: '/lorem/home/longread/3.jpg',
                  width: 0,
                  height: 0,
                  alt: '',
                },
                video: null,
              },
            ],
          },
          {
            key: 2,
            label: 'play',
            media: [
              {
                key: 0,
                image: {
                  original: '/lorem/home/longread/4.jpg',
                  width: 0,
                  height: 0,
                  alt: '',
                },
                video: null,
              },
              {
                key: 1,
                image: {
                  original: '/lorem/home/longread/5.jpg',
                  width: 0,
                  height: 0,
                  alt: '',
                },
                video: null,
                // video: '/lorem/video.mp4',
              },
            ],
          },
        ],
      },

      paragraphs: {
        items: [
          {
            key: 0,
            media: {
              image: {
                original: '/lorem/home/paragraphs/0.jpg',
                width: 0,
                height: 0,
                alt: '',
              },
              video: null,
            },
            title: 'Live',
            description:
              'Discover your home experience the essence of comfort and quality at Nuanu. From tranquil retreats to high-quality havens, we provide the perfect space for your stay',
            action: {
              kind: 'link',
              text: 'View accommodation options',
              href: '/accomodation',
              target: null,
            },
            factoids: [
              { key: 0, title: 'Value 1', description: 'Description 1' },
              { key: 1, title: 'Value 2', description: 'Description 2' },
              {
                key: 2,
                title: '24',
                description: 'hour services<br />are available',
              },
            ],
          },
          {
            key: 1,
            media: {
              image: {
                original: '/lorem/home/paragraphs/1.jpg',
                width: 0,
                height: 0,
                alt: '',
              },
              video: null,
            },
            title: 'Work',
            description:
              'Your ideas are a valuable part of our journey. Step into our co-creating space, where innovation thrives and new ideas are nurtured. Share your vision and collaborate with us to shape something extraordinary',
            action: {
              kind: 'link',
              text: 'Collaborate with us',
              href: '/',
              target: null,
            },
            factoids: [
              { key: 0, title: 'Value 1', description: 'Description 1' },
              {
                key: 1,
                title: '24',
                description: 'hour services<br />are available',
              },
              {
                key: 2,
                title: '24',
                description: 'hour services<br />are available',
              },
            ],
          },
          {
            key: 2,
            media: {
              image: {
                original: '/lorem/home/paragraphs/2.jpg',
                width: 0,
                height: 0,
                alt: '',
              },
              video: null,
            },
            title: 'Play',
            description:
              'At nuanu, events are the playgrounds of creativity and connection. Experience the magic of play as we nurture vibrant gatherings and events that inspire and engage',
            action: {
              kind: 'link',
              text: 'Collaborate with us',
              href: '/',
              target: null,
            },
            factoids: [
              {
                key: 1,
                title: '5',
                description: 'high-level restaurants<br />and cafes',
              },
              {
                key: 2,
                title: '17',
                description: 'high-level restaurants<br />villas and bars',
              },
            ],
          },
        ],
      },
    },
  });
};

export default handler;
