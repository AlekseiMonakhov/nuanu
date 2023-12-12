import { DeepRequired } from 'ts-essentials';
import { IEventsItem } from '@/templates/Events/components/Item/types';
import { times } from '@anton.bobrov/vevet-init';
import { getRandomInt } from '@anton.bobrov/react-hooks';
import { randomInt } from 'crypto';

const titles = [
  'David Choe: How to be the Master of your Universe',
  'Voice of the Voiceless',
  'How to be a DJ and what they actually do',
  'Behind the scene: Suara 2022',
  'Behind the scene: Suara 2022',
  'How to be a DJ and what they actually do',
];

const tags = ['For kids', 'Festivals', 'Exclusive'];

const types = ['Lecture', 'Workshop', 'Meetup'];

const startDate = 1702386339594;

export const MOCK_EVENTS: DeepRequired<DeepRequired<IEventsItem>[]> = times(
  (index) => {
    const timeOffset = 1000 * 3600 * 24 * 2.2 * index;

    return {
      key: index,
      href: 'https://google.com/',
      image: {
        original: `/lorem/events/items/${index % 6}.jpg`,
        width: 0,
        height: 0,
        alt: 'image alt',
      },
      startTime: new Date(startDate + timeOffset).toISOString(),
      endTime: new Date(startDate + timeOffset + 1000 * 3600 * 2).toISOString(),
      type: types[index % types.length],
      tags: [...tags]
        .sort(() => Math.random() - 0.5)
        .slice(0, randomInt(0, tags.length)),
      title: titles[index % titles.length],
      place: 'Nuanu, Labyrinth',
      price: index % 3 === 0 ? 0 : getRandomInt(1, 10),
    };
  },
  40,
);
