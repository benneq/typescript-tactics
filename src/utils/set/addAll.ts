import { add } from './add';
import { SetCompatible } from './_types';

/**
 *
 * @mutation
 *
 * @example
 * addAll([1,2])([]) => [1,2]
 * addAll([1,2])([2,3]) => [1,2,3]
 *
 * @param set
 * @returns
 */
export const addAll =
  <T>(set: Set<T>) =>
  (value: SetCompatible<T>): void => {
    value.forEach(add(set));
  };
