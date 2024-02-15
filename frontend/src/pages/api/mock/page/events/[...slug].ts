import type { NextApiRequest, NextApiResponse } from 'next';
import { GET_PAGE_GLOBAL } from '@/mock/PAGE_GLOBAL';
import { TPageTemplateRegistryAPI } from '@/templates/Renderer';
import { MOCK_EVENTS } from '@/mock/EVENTS';
import { isString } from '@anton.bobrov/react-hooks';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<TPageTemplateRegistryAPI>,
) => {
  const slug = Array.isArray(req.query.slug)
    ? req.query.slug[0]
    : req.query.slug;

  const id = isString(slug) ? Number(slug) : 0;

  const PAGE_GLOBAL = GET_PAGE_GLOBAL({ req, templateName: 'Events/Info' });

  res.json({
    global: PAGE_GLOBAL,

    templateName: 'Events/Info',

    template: {
      ...MOCK_EVENTS[id],

      image: {
        original: '/lorem/event/screen.jpg',
        width: 1728,
        height: 500,
        alt: '',
      },

      title: `Fuocco's Night${''}`,

      richContent: [
        {
          key: 0,
          kind: 'poster',
          original: '/lorem/event/poster.jpg',
          width: 895,
          height: 1037,
          alt: '',
        },

        {
          key: 1,
          kind: 'text',
          text: `
            <p>Echoes of Earth travels upwards to Goa in 2024 as the festival continues to explore stories from the Western Ghats. Spanning a 100 acres, with 40+ international & local artists performing on 4 uniquely designed stages over 3 days with the intent to celebrate one Earth, our journey into Goa aims to educate, create awareness around conservation and promote responsible celebration.</p>
            <p>Our theme for this year ‘Ensemble of the Wild’, focuses on the interconnectedness of the Western Ghats, touching on Goa’s rich eco-systems and unearthing the stories behind its biodiversity.</p>
            <p>In the past 6 years Echoes of Earth has hosted over 300+ International & Indian Artists. This has translated into multiple genres of music, engaging our community of ardent listeners over two days of the festival, with musicians like Yussef Dayes, Klangphonics, Acid Pauli, Square Pusher, Shigeto Ensemble, and many more who have made appearances in the past.</p>
            <p>Book your tickets now and join us on the greener side!</p>
            <p>The festival also hosts various cultural & curated experiences that are nothing short of a portal for exploration, experimentation & knowledge transfer for our community. Some of the highlights of the festival include - A solar-powered stage, larger-than-life art installations, 4 uniquely designed stages, education-led kids workshops, and an exclusive brunch with artists performing at Echoes on day two, a carefully curated flea market with organic, natural, artisanal and handmade products, and much more.</p>
          `,
        },

        { key: 2, kind: 'youtube', id: '8GTwoTRvdtQ' },

        { key: 3, kind: 'soundcloud', id: '237853574' },
      ],
    },
  });
};

export default handler;
