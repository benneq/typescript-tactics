import { toggle } from './toggle';
import { SetCompatible } from './_types';

/**
 *
 * @mutation
 *
 * @example
 * toggleAll([1,2])([]) => [1,2]
 * toggleAll([1,2])([2,3]) => [1,3]
 *
 * @param set
 * @returns
 */
export const toggleAll =
  <T>(set: Set<T>) =>
  (value: SetCompatible<T>): void => {
    value.forEach(toggle(set));
  };
