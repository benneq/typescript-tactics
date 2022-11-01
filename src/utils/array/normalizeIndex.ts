import { mod } from '../number/mod';

/**
 *
 * @example
 * normalizeIndex([1,2,3], -1) => 2
 * normalizeIndex([1,2,3], 6) => 0
 *
 * @param array
 * @param index
 * @returns
 */
export const normalizeIndex =
  (index: number) =>
  (array: ArrayLike<unknown>): number => {
    return mod(index, array.length);
  };
