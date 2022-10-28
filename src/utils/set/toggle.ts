import { add } from './add';
import { contains } from './contains';
import { remove } from './remove';

/**
 *
 * @mutation
 *
 * @example
 * toggle([1,2])(2) => [1]
 * toggle([1,2])(3) => [1,2,3]
 *
 * @param set
 * @returns
 */
export const toggle =
  <T>(set: Set<T>) =>
  (value: T): void => {
    const action = contains(set)(value) ? remove : add;
    action(set)(value);
  };
