import { not } from '../predicate/not';
import { Predicate } from '../predicate/_types';
import { dropWhile } from './dropWhile';
import { first } from './first';

/**
 * Get the first element of the provided Iterable, or the given default value if the Iterable is empty
 *
 * @example
 * first()([]) => undefined
 * first()([1,2,3]) => 1
 * first(2)([]) => 2
 *
 * @param defaultValue
 * @returns the first element of the provided Iterable, or the given defaultValue
 */
export const findFirst: {
  <T>(predicate: Predicate<[T]>): (iterable: Iterable<T>) => T | undefined;
  <T>(predicate: Predicate<[T]>, defaultValue: T): (iterable: Iterable<T>) => T;
} =
  <T>(predicate: Predicate<[T]>, defaultValue?: T) =>
  (iterable: Iterable<T>): T | undefined => {
    return first(defaultValue)(dropWhile(not(predicate))(iterable));
  };
