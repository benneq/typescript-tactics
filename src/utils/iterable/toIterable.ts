import { isIterable } from './isIterable';

export type IterableCompabile<T> = Iterable<T>;

/**
 * Converts the provided value to an Iterable if necessary
 *
 * @param value
 * @returns either the provided value itself if it already was an Iterable, or a new Iterable
 */
export const toIterable = <T>(value: T | IterableCompabile<T>): Iterable<T> => {
  return isIterable(value) ? value : [value];
};
