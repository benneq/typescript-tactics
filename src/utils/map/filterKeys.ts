import { Predicate } from '../predicate/_types';
import { filter } from './filter';

export const filterKeys = <K, V>(
  predicate: Predicate<[K]>
): ((map: Map<K, V>) => Map<K, V>) => {
  return filter<K, V>(([k]) => predicate(k));
};
