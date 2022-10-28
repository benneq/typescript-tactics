/**
 *
 * @mutation
 *
 * @example
 * remove([1,2])(3) => [1,2]
 * remove([1,2])(2) => [1]
 *
 * @param set
 * @returns
 */
export const remove =
  <T>(set: Set<T>) =>
  (value: T): void => {
    set.delete(value);
  };
