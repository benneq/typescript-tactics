import { Predicate } from '../predicate/_types';
import { filter } from './filter';

export const filterValues = <K, V>(
  predicate: Predicate<[V]>
): ((map: Map<K, V>) => Map<K, V>) => {
  return filter(([_, v]: [K, V]) => predicate(v));
};
