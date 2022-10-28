/**
 *
 * @example
 * isEmpty([]) => true
 * isEmpty([1,2]) => false
 *
 * @param set
 * @returns
 */
export const isEmpty = <T>(set: Set<T>): boolean => {
  return !set.size;
};
