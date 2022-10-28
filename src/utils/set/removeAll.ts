import { remove } from './remove';
import { SetCompatible } from './_types';

/**
 *
 * @mutation
 *
 * @example
 * removeAll([1,2])([]) => [1,2]
 * removeAll([1,2])([2,3]) => [1]
 *
 * @param set
 * @returns
 */
export const removeAll =
  <T>(set: Set<T>) =>
  (value: SetCompatible<T>): void => {
    value.forEach(remove(set));
  };
