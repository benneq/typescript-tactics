/**
 *
 * @mutation
 *
 * @example
 * add([1,2])(2) => [1,2]
 * add([1,2])(3) => [1,2,3]
 *
 * @param set
 * @returns
 */
export const add =
  <T>(set: Set<T>) =>
  (value: T): void => {
    set.add(value);
  };
