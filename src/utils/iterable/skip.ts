import { dropWhile } from './dropWhile';

/**
 * Skip the first n elements of the provided Iterable
 *
 * @example
 * skip(2)([1,2,3,4]) => [3,4]
 *
 * @param maxSize
 * @returns a Generator that does not emit the first toSkip elements
 */
export const skip = <T>(
  toSkip: number
): ((iterable: Iterable<T>) => Generator<T, void, unknown>) => {
  let i = 0;
  return dropWhile(() => {
    return toSkip > i++;
  });
};
