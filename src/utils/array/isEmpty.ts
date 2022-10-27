import { Predicate } from 'utils/predicate';

/**
 * Checks if the provided Array is empty
 *
 * @param array
 * @returns `true` is the provided Array is empty
 */
export const isEmpty: Predicate<unknown[]> = (array) => {
  return !array.length;
};
