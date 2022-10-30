import { Provider } from '../func';
import { fromIterable } from '../map/fromIterable';

export const uniqueBy = <T, R = unknown>(
  array: T[],
  keyProvider: Provider<R, [T]>
): T[] => {
  const map = fromIterable<T, R, T>((value) => [keyProvider(value), value])(
    array
  );
  return Array.from(map.values());
};
