import { dropWhile } from './dropWhile';

/**
 * Skip the first n elements of the provided Iterable
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
