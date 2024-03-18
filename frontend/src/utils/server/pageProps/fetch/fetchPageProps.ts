import { IPageAPI } from '@/types/Page';
import { MOCK_GET_PAGE } from '@/mock/GET_PAGE';
import { removeDublicateSlashes } from '@anton.bobrov/react-hooks';
import { setDynamicData } from './setDynamicData';

interface IProps {
  path: string;
  locale?: string;
}

export async function fetchPageProps({ path, locale }: IProps) {
  let props: IPageAPI<any, any>;

  if (process.env.API_PAGE_URL) {
    const fetchURL = new URL(
      removeDublicateSlashes(`${process.env.API_PAGE_URL}/${path}`),
    );

    if (locale) {
      fetchURL.searchParams.append('locale', locale);
    }

    const response = await fetch(fetchURL);
    props = (await response.json()) as IPageAPI<any, any>;
  } else {
    props = MOCK_GET_PAGE(path);
  }

  return setDynamicData(props, path);
}
