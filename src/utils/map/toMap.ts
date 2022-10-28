import { IterableCompabile } from 'utils/iterable/toIterable';
import { isMap } from './isMap';

export type MapCompatible<K, V> = IterableCompabile<[K, V]> | Map<K, V>;

export const toMap = <K, V>(value: MapCompatible<K, V>): Map<K, V> => {
  if (isMap(value)) {
    return value;
  }

  return new Map(value);
};
