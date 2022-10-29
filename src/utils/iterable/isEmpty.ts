/**
 * Checks if the provided Iterable contains any element
 *
 * Caution: This function will consume the first element
 *
 * @exmaple
 * isEmpty([]) => true
 * isEmpty([1,2,3]) => false
 *
 * @param iterable
 * @returns `true` if the provided Iterable is empty
 */
export const isEmpty = <T>(iterable: Iterable<T>): boolean => {
  for (const _ of iterable) {
    return false;
  }
  return true;
};
