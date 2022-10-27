import { takeWhile } from './takeWhile';

/**
 * Limit the elements of the provided Iterable to the first n elements
 *
 * @param maxSize
 * @returns a Generator that emits only the first maxSize elements
 */
export const limit = <T>(
  maxSize: number
): ((iterable: Iterable<T>) => Generator<T, void, unknown>) => {
  let i = 0;
  return takeWhile(() => {
    return maxSize > i++;
  });
};
