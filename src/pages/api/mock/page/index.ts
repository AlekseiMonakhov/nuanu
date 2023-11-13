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
      components: [
        {
          key: 0,
          componentName: 'HomeIntro',
          props: {
            title: 'Home Page',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
          children: null,
        },
        {
          key: 1,
          componentName: 'HomeAbout',
          props: {
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
          children: [
            {
              key: 0,
              componentName: 'HomeLink',
              props: {
                name: 'Read more',
                href: 'https://google.com',
                isExternal: true,
              },
              children: null,
            },
          ],
        },
      ],
    },
  });
};

export default handler;
