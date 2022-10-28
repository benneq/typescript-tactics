import { isIndex } from './isIndex';

/**
 * Swaps the elements at the given indexes of the provided Array
 *
 * @mutation
 *
 * @example
 * swap([1], 0, 1) => [1]
 * swap([1,2,3], 1, 2) => [1,3,2]
 *
 * @param array
 * @param indexA
 * @param indexB
 */
export const swap = <T>(array: T[], indexA: number, indexB: number): void => {
  const isIndexOfArray = isIndex(array);
  if (isIndexOfArray(indexA) && isIndexOfArray(indexB)) {
    const temp = array[indexA] as T;
    array[indexA] = array[indexB] as T;
    array[indexB] = temp;
  }
};
