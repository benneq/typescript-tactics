import { contains } from '../range';

/**
 * Checks if the given index is in bounds of the provided Array
 *
 * @param array
 * @returns `true` if the given index is between 0 and Array.length
 */
export const isIndex =
  <T>(array: T[]) =>
  (index: number): boolean => {
    return contains([0, array.length])(index);
  };
