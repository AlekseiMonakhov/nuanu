import type { NextApiRequest, NextApiResponse } from 'next';
import { GET_PAGE_GLOBAL } from '@/mock/PAGE_GLOBAL';
import { TPageTemplateRegistryAPI } from '@/templates/Renderer';
import { MOCK_EVENTS } from '@/mock/EVENTS';
import { isString } from '@anton.bobrov/react-hooks';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<TPageTemplateRegistryAPI>,
) => {
  const { slug } = req.query;
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
    },
  });
};

export default handler;
