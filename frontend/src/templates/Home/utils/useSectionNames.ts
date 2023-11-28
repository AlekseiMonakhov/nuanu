import { useStoreLexicon } from '@/store/reducers/page';
import { useMemo } from 'react';

interface IProps {
  hasStories: boolean;
  hasInside: boolean;
}

export function useSectionNames({ hasStories, hasInside }: IProps) {
  const { home: lexicon } = useStoreLexicon();

  const sectionNames = useMemo(() => {
    const names: string[] = [];

    if (hasStories) {
      names.push(lexicon.stories.title);
    }

    if (hasInside) {
      names.push(lexicon.inside.title);
    }

    names.push(lexicon.features.title);
    names.push(lexicon.site.title);

    return names;
  }, [
    hasInside,
    hasStories,
    lexicon.features.title,
    lexicon.inside.title,
    lexicon.site.title,
    lexicon.stories.title,
  ]);

  return sectionNames;
}
