import { Predicate } from '../predicate/_types';
import { filter } from './filter';

export const filterKeys = <K, V>(
  predicate: Predicate<[K]>
): ((map: Map<K, V>) => Map<K, V>) => {
  return filter(([k]: [K, V]) => predicate(k));
};
