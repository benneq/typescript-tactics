import { IterableCompabile } from './iterable';
import { Predicate } from './types';

export type MapCompatible<K, V> = IterableCompabile<[K, V]> | Map<K, V>;

export const isMap = <K, V>(value: unknown): value is Map<K, V> => {
  return value instanceof Map;
};

export const toMap = <K, V>(value: MapCompatible<K, V>): Map<K, V> => {
  if (isMap(value)) {
    return value;
  }

  return new Map(value);
};

export const copy = <K, V>(map: Map<K, V>): Map<K, V> => {
  return new Map(map);
};

export const filter =
  <K, V>(map: Map<K, V>) =>
  (predicate: Predicate<[K, V]>): Map<K, V> => {
    const res = new Map<K, V>();
    map.forEach((v, k) => predicate([k, v]) && res.set(k, v));
    return res;
  };

export const isEmpty = <K, V>(map: Map<K, V>): boolean => {
  return !map.size;
};

export const keySet = <K, V>(map: Map<K, V>) => {
  return new Set(map.keys());
};
