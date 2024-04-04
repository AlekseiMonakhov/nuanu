import { TPageTemplateRegistryAPI } from '@/templates/Renderer';
import { MOCK_GET_PAGE_GLOBAL } from '../GET_PAGE_GLOBAL';

export function MOCK_PAGES_HOME(path: string): TPageTemplateRegistryAPI {
  const PAGE_GLOBAL = MOCK_GET_PAGE_GLOBAL({
    templateName: 'Home',
    path,
  });

  return {
    global: PAGE_GLOBAL,

    templateName: 'Home',

    template: {
      stories: {
        items: [
          {
            key: 0,
            media: {
              // image: {
              //   original: '/lorem/home/stories/0.jpg',
              //   width: 900,
              //   height: 0,
              //   alt: '',
              // },
              image: null,
              video: '/lorem/home/stories/0.mp4',
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
            titleSize: 'medium',
            description: null,
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
              sup: null,
            },
            title: 'Some Title',
            titleSize: 'medium',
            description: null,
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
            title: 'Suara festival 2024 Open Call',
            titleSize: 'medium',
            description: null,
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
                  image: null,
                  video: '/lorem/home/inside/eco-living/willow-hotel.mp4',
                },
                title: 'Willow Hotel<br />4-star oceanfront hotel',
              },
              {
                key: 1,
                media: {
                  image: null,
                  video: '/lorem/home/inside/eco-living/tree-house.mp4',
                },
                title: 'Tree House<br />Eco-living deep in nature',
              },
              {
                key: 2,
                media: {
                  image: null,
                  video: '/lorem/home/inside/eco-living/labyrinth.mp4',
                },
                title: 'Labyrinth<br />Music studio and retreat',
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
                  video:
                    '/lorem/home/inside/collaborations/plastic-workshops.mp4',
                },
                title: 'Plastic Workshops<br />Products from recycled plastic',
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
                  image: null,
                  video: '/lorem/home/inside/natures-embrace/nature.mp4',
                },
                title: 'Magic Garden<br />Nature at the heart of Nuanu',
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
                  video: '/lorem/home/inside/gatherings/suara-festival.mp4',
                },
                title: 'Suara Festival<br />Art, music, culture Festival',
              },
              {
                key: 1,
                media: {
                  image: null,
                  video: '/lorem/home/inside/gatherings/luna-beach-club.mp4',
                },
                title: 'The Luna<br />Bech Club of the new format',
              },
              {
                key: 2,
                media: {
                  image: null,
                  video: '/lorem/home/inside/gatherings/samana-festival.mp4',
                },
                title:
                  'Samana Festival<br />Festival for children and the family',
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
                  image: {
                    original:
                      '/lorem/home/inside/art-expressions/light-house.png',
                    width: 0,
                    height: 0,
                    alt: '',
                  },
                  video: null,
                },
                title:
                  'The "Bhuma" Lighthouse<br />A symbol of hope and sustainability',
              },
              {
                key: 1,
                media: {
                  image: null,
                  video: '/lorem/home/inside/art-expressions/art-object.mp4',
                },
                title:
                  'Nuanu’s Art Objects<br />Beautiful mix of art and technology',
              },
              {
                key: 2,
                media: {
                  image: null,
                  video:
                    '/lorem/home/inside/art-expressions/art-village academy.mp4',
                },
                title:
                  'Art Village<br />Art program fosters cultural diversity',
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
                  image: null,
                  video: '/lorem/home/inside/wellness/yoga.mp4',
                },
                title: 'Yoga practice<br />Daily activities in nature',
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
                  video: '/lorem/home/inside/learning/jungle-kids.mp4',
                },
                title: 'Jungle Kids<br />For children 4 to 7 years old',
              },
              {
                key: 1,
                media: {
                  image: null,
                  video: '/lorem/home/inside/learning/proed-school.mp4',
                },
                title:
                  'ProEd Global School<br />For children 7 to 12 years old',
              },
            ],
          },
        ],
      },

      longRead: null,

      // longRead: {
      //   title: 'Changing the way we',
      //   items: [
      //     {
      //       key: 0,
      //       label: 'live',
      //       media: [
      //         {
      //           key: 0,
      //           image: {
      //             original: '/lorem/home/longread/0.jpg',
      //             width: 0,
      //             height: 0,
      //             alt: '',
      //           },
      //           video: null,
      //         },
      //         {
      //           key: 1,
      //           image: {
      //             original: '/lorem/home/longread/1.jpg',
      //             width: 0,
      //             height: 0,
      //             alt: '',
      //           },
      //           video: null,
      //         },
      //       ],
      //     },
      //     {
      //       key: 1,
      //       label: 'work',
      //       media: [
      //         {
      //           key: 0,
      //           image: {
      //             original: '/lorem/home/longread/2.jpg',
      //             width: 0,
      //             height: 0,
      //             alt: '',
      //           },
      //           video: null,
      //         },
      //         {
      //           key: 1,
      //           image: {
      //             original: '/lorem/home/longread/3.jpg',
      //             width: 0,
      //             height: 0,
      //             alt: '',
      //           },
      //           video: null,
      //         },
      //       ],
      //     },
      //     {
      //       key: 2,
      //       label: 'play',
      //       media: [
      //         {
      //           key: 0,
      //           image: {
      //             original: '/lorem/home/longread/4.jpg',
      //             width: 0,
      //             height: 0,
      //             alt: '',
      //           },
      //           video: null,
      //         },
      //         {
      //           key: 1,
      //           image: {
      //             original: '/lorem/home/longread/5.jpg',
      //             width: 0,
      //             height: 0,
      //             alt: '',
      //           },
      //           video: null,
      //           // video: '/lorem/video.mp4',
      //         },
      //       ],
      //     },
      //   ],
      // },

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
              sup: null,
              href: '/accommodation',
              target: null,
            },
            factoids: [
              {
                key: 0,
                title: '7',
                description: 'types of accommodation<br /> in eco-living',
              },
              {
                key: 1,
                title: '3',
                description:
                  'educational programs<br />for children and adults',
              },
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
              sup: null,
              href: '/',
              target: null,
            },
            factoids: [
              { key: 0, title: '36', description: 'collaborative projects' },
              {
                key: 1,
                title: '18',
                description: 'global companies<br />partner with us',
              },
              {
                key: 2,
                title: '209',
                description: 'members<br />in Nuanu team',
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
              text: 'View upcoming events',
              sup: null,
              href: '/events',
              target: null,
            },
            factoids: [
              {
                key: 1,
                title: '114',
                description: 'events carried out',
              },
              {
                key: 2,
                title: '35',
                description: 'different activities daily',
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
              'One who has ideas or conceives <br/>projects regarded as impractical',
            image: {
              original: '/lorem/home/person_type/1-visionary.png',
              width: 0,
              height: 0,
              alt: '',
            },
          },
          {
            key: 1,
            title: 'Leader',
            description:
              'One who has ideas or conceives <br/>projects regarded as impractical',
            image: {
              original: '/lorem/home/person_type/2-leader.png',
              width: 0,
              height: 0,
              alt: '',
            },
          },
          {
            key: 2,
            title: 'Creator',
            description:
              'One who has ideas or conceives <br/>projects regarded as impractical',
            image: {
              original: '/lorem/home/person_type/3-creator.png',
              width: 0,
              height: 0,
              alt: '',
            },
          },
          {
            key: 3,
            title: 'Maker',
            description:
              'One who has ideas or conceives <br/>projects regarded as impractical',
            image: {
              original: '/lorem/home/person_type/4-maker.png',
              width: 0,
              height: 0,
              alt: '',
            },
          },
        ],
      },
    },
  };
}
