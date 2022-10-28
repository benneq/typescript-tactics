import { some } from '../iterable/some';
import { contains } from './contains';
import { SetCompatible } from './_types';

/**
 *
 * @example
 * containsAny([1,2])([2]) => true
 * containsAny([1,2])([2,3]) => true
 *
 * @param set
 * @returns
 */
export const containsAny =
  <T>(set: Set<T>) =>
  (value: SetCompatible<T>): boolean => {
    return some(value)(contains(set));
  };
