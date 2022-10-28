import { every } from '../iterable/every';
import { contains } from './contains';
import { SetCompatible } from './_types';

/**
 *
 * @example
 * containsAll([1,2])([2]) => true
 * containsAll([1,2])([2,3]) => false
 *
 * @param set
 * @returns
 */
export const containsAll =
  <T>(set: Set<T>) =>
  (value: SetCompatible<T>): boolean => {
    return every(value)(contains(set));
  };
