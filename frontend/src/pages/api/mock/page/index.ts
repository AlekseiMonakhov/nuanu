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

      inside: {
        items: [
          {
            key: 0,
            title: 'Eco-living',
            stories: [
              {
                key: 0,
                media: {
                  image: {
                    original: '/lorem/home/inside/0.jpg',
                    width: 0,
                    height: 0,
                    alt: '',
                  },
                  video: null,
                },
                title: 'Jungle Kids<br/>For children 4 to 7 years old',
              },
              {
                key: 1,
                media: {
                  image: null,
                  video: '/lorem/home/inside/video_0.mp4',
                },
                title: 'Yoga every Monday<br>Master classes',
              },
            ],
          },
          {
            key: 1,
            title: 'Collaborations',
            stories: [
              {
                key: 0,
                media: {
                  image: null,
                  video: '/lorem/home/inside/video_1.mp4',
                },
                title: 'Title<br/>Title',
              },
              {
                key: 1,
                media: {
                  image: null,
                  video: '/lorem/home/inside/video_2.mp4',
                },
                title: 'Yoga every Monday',
              },
            ],
          },
          {
            key: 2,
            title: `Nature's Embrace${''}`,
            stories: [
              {
                key: 0,
                media: {
                  image: {
                    original: '/lorem/home/inside/1.jpg',
                    width: 0,
                    height: 0,
                    alt: '',
                  },
                  video: null,
                },
                title: 'Title<br/>Title',
              },
              {
                key: 1,
                media: {
                  image: {
                    original: '/lorem/home/inside/2.jpg',
                    width: 0,
                    height: 0,
                    alt: '',
                  },
                  video: null,
                },
                title: '',
              },
            ],
          },
          {
            key: 3,
            title: 'Gatherings',
            stories: [
              {
                key: 0,
                media: {
                  image: null,
                  video: '/lorem/home/inside/video_3.mp4',
                },
                title: 'Title',
              },
              {
                key: 1,
                media: {
                  image: null,
                  video: '/lorem/home/inside/video_4.mp4',
                },
                title: 'Some title',
              },
            ],
          },
          {
            key: 4,
            title: 'Art Expressions',
            stories: [
              {
                key: 0,
                media: {
                  image: null,
                  video: '/lorem/home/inside/video_5.mp4',
                },
                title: 'Title',
              },
              {
                key: 1,
                media: {
                  image: {
                    original: '/lorem/home/inside/0.jpg',
                    width: 0,
                    height: 0,
                    alt: '',
                  },
                  video: null,
                },
                title: 'Some title',
              },
            ],
          },
          {
            key: 5,
            title: 'Wellness',
            stories: [
              {
                key: 0,
                media: {
                  image: {
                    original: '/lorem/home/inside/1.jpg',
                    width: 0,
                    height: 0,
                    alt: '',
                  },
                  video: null,
                },
                title: 'Title',
              },
              {
                key: 1,
                media: {
                  image: {
                    original: '/lorem/home/inside/2.jpg',
                    width: 0,
                    height: 0,
                    alt: '',
                  },
                  video: null,
                },
                title: 'Some title',
              },
            ],
          },
          {
            key: 6,
            title: 'Learning',
            stories: [
              {
                key: 0,
                media: {
                  image: null,
                  video: '/lorem/home/inside/video_0.mp4',
                },
                title: 'Title',
              },
              {
                key: 1,
                media: {
                  image: null,
                  video: '/lorem/home/inside/video_1.mp4',
                },
                title: 'Some title',
              },
            ],
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

      personTypes: {
        title: 'A home for visionaries, leaders, creators, and makers',
        items: [
          {
            key: 0,
            title: 'Visionary',
            description:
              'One who has ideas<br />or conceives projects<br />regarded as impractical',
            image: {
              original: '/lorem/home/person_type/0.png',
              width: 0,
              height: 0,
              alt: '',
            },
          },
          {
            key: 1,
            title: 'Leader',
            description:
              'A person who provides<br/>structures and frameworks<br/>for the growth of people',
            image: {
              original: '/lorem/home/person_type/1.png',
              width: 0,
              height: 0,
              alt: '',
            },
          },
          {
            key: 2,
            title: 'Creator',
            description:
              'They make things happen and provide opportunities for others. Can convince themselves and others if anything',
            image: {
              original: '/lorem/home/person_type/2.png',
              width: 0,
              height: 0,
              alt: '',
            },
          },
          {
            key: 3,
            title: 'Maker',
            description:
              'They are driven by stability<br />and security and they choose<br />meaningful goals to pursue',
            image: {
              original: '/lorem/home/person_type/3.png',
              width: 0,
              height: 0,
              alt: '',
            },
          },
        ],
      },
    },
  });
};

export default handler;
