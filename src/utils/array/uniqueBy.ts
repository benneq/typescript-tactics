import { Provider } from '../func';
import { fromIterable } from '../map/fromIterable';

export const uniqueBy = <T, R = unknown>(
  keyProvider: Provider<R, [T]>
): ((array: T[]) => T[]) => {
  const toMap = fromIterable<T, R, T>((value) => [keyProvider(value), value]);

  return (array) => Array.from(toMap(array).values());
};
