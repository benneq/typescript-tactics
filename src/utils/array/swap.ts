import { isIndex } from './isIndex';

/**
 * Swaps the elements at the given indexes of the provided Array
 *
 * @mutation
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
