import { TPage } from '@/types/Page';

export function setDynamicMetaImage(props: TPage) {
  const { global, template } = props;

  if (!global.meta.image && template) {
    const matches = JSON.stringify(template).match(
      /(http?s)?[^"' ]*\.(jpg|png)/,
    );

    if (matches && global.meta) {
      global.meta.image = matches.shift();
    }
  }

  return props;
}
