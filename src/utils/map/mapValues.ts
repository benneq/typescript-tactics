import { forEach } from '../iterable/forEach';
import { Mapper } from '../func';

export const mapValues =
  <V, R>(mapper: Mapper<V, R>) =>
  <K>(map: Map<K, V>): Map<K, R> => {
    const res = new Map<K, R>();
    forEach(map)(([k, v]) => res.set(k, mapper(v)));
    return res;
  };
