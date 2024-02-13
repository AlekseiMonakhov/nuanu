import { times } from '@anton.bobrov/vevet-init';

export function repeatItems<T extends Record<string, any>>(
  itemsProp: T[],
  minCount: number,
) {
  const repeatTimes = Math.ceil(minCount / itemsProp.length);

  const items = times(() => itemsProp, repeatTimes)
    .flat(1)
    .map((slide, index) => ({
      ...slide,
      key: index,
    }));

  return { items, count: items.length, originalCount: itemsProp.length };
}
