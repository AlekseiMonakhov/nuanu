import { DeepRequired } from 'ts-essentials';
import { times } from '@anton.bobrov/vevet-init';
import { getRandomInt } from '@anton.bobrov/react-hooks';
import { randomInt } from 'crypto';
import { IEventsItem } from '@/templates/Events/Index/components/Item/types';
import { getIsoDateWithoutTimezone } from '@/utils/dates/getIsoDateWithoutTimezone';

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
      href: `/events/${index}`,
      image: {
        original: `/lorem/events/items/${index % 6}.jpg`,
        width: 0,
        height: 0,
        alt: 'image alt',
      },
      startTime: getIsoDateWithoutTimezone(new Date(startDate + timeOffset)),
      endTime: getIsoDateWithoutTimezone(
        new Date(startDate + timeOffset + 1000 * 3600 * 2),
      ),
      type: types[index % types.length],
      tags: [...tags]
        .sort(() => Math.random() - 0.5)
        .slice(0, randomInt(0, tags.length)),
      title: titles[index % titles.length],
      location: {
        name: 'Nuanu, Labyrinth',
        address: 'Bolívar 624, B1066AAN San Telmo, Buenos Aires, Argentina',
        lat: 1.260681,
        lng: 103.832085,
      },
      price: index % 3 === 0 ? '0' : `${getRandomInt(250, 250)}k`,
      minAge: '18+',
      organizer: {
        name: 'David Choe Support',
        href: 'https://google.com/',
      },
    };
  },
  40,
);
