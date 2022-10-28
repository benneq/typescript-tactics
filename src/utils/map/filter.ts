import { Predicate } from '../predicate/_types';

export const filter =
  <K, V>(predicate: Predicate<[[K, V]]>) =>
  (map: Map<K, V>): Map<K, V> => {
    const res = new Map<K, V>();
    map.forEach((v, k) => predicate([k, v]) && res.set(k, v));
    return res;
  };
