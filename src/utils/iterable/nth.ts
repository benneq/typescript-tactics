import { first } from './first';
import { skip } from './skip';

/**
 * Get the nth element of the provided Iterable, or the given default value if the Iterable is empty
 *
 * @example
 * nth(1)([]) => undefined
 * nth(2)([1,2,3]) => 2
 * nth(1, 3)([]) => 3
 *
 * @param defaultValue
 * @returns the nth element of the provided Iterable, or the given defaultValue
 */
export const nth: {
  <T>(index: number): (iterable: Iterable<T>) => T | undefined;
  <T>(index: number, defaultValue: T): (iterable: Iterable<T>) => T;
} =
  <T>(index: number, defaultValue?: T) =>
  (iterable: Iterable<T>): T | undefined => {
    return first(defaultValue)(skip<T>(index)(iterable));
  };
