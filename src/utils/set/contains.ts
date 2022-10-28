/**
 *
 * @example
 * contains([1,2])(2) => true
 * contains([1,2])(3) => false
 *
 * @param set
 * @returns
 */
export const contains =
  <T>(set: Set<T>) =>
  (value: T): boolean => {
    return set.has(value);
  };
