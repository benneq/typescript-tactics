import { Mapper } from '../function/_types';
import { forEach } from '../iterable/forEach';

export const fromIterable =
  <T, K, V>(mapper: Mapper<T, [K, V]>) =>
  (iterable: Iterable<T>): Map<K, V> => {
    const res = new Map<K, V>();
    forEach(iterable)((e) => res.set(...mapper(e)));
    return res;
  };
