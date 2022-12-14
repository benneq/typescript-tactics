import { takeWhile } from './takeWhile';

/**
 * Limit the elements of the provided Iterable to the first n elements
 *
 * @example
 * limit(2)([]) => []
 * limit(2)([1]) => [1]
 * limit(2)([1,2,3]) => [1,2]
 *
 * @param maxSize
 * @returns a Generator that emits only the first maxSize elements
 */
export const limit = <T>(
  maxSize: number
): ((iterable: Iterable<T>) => Generator<T, void, unknown>) => {
  return takeWhile(() => !!maxSize--);
};
