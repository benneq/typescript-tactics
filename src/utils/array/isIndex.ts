import { contains } from '../range';

/**
 * Checks if the given index is in bounds of the provided Array
 *
 * @example
 * isIndex([])(0) => false
 * isIndex([1,2,3])(1) => true
 * isIndex([1])(-1) => false
 * isIndex([1])(1) => false
 * isIndex("abc")(2) => true
 *
 * @param array
 * @returns `true` if the given index is between 0 and Array.length
 */
export const isIndex =
  <T>(array: ArrayLike<T>) =>
  (index: number): boolean => {
    return contains([0, array.length])(index);
  };
