import getLexicon from '@/lexicon/getLexicon';
import { IPageAPI, TPage } from '@/types/Page';
import { setDynamicMetaImage } from './setDynamicMetaImage';
import { getBaseURL } from '../../getBaseUrl';

export function setDynamicData(data: IPageAPI<any, any>, path: string) {
  const baseUrl = getBaseURL();
  const canonicalUrl = new URL(path, baseUrl).href;

  let props: TPage = {
    ...data,
    lexicon: getLexicon(data.global.lang),
    url: {
      base: baseUrl,
      canonical: canonicalUrl,
    },
  };

  props = setDynamicMetaImage(props);

  return props;
}
