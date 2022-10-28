/**
 *
 * @example
 * copy([]) => []
 * copy([1,2]) => [1,2]
 *
 * @param set
 * @returns
 */
export const copy = <T>(set: Set<T>): Set<T> => {
  return new Set(set);
};
