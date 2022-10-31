import { pipe } from '../function';
import { dropWhile } from '../iterable/dropWhile';
import { first } from '../iterable/first';
import { map } from '../iterable/map';
import { Comparator } from './_types';

/**
 * Executes the provided Comparators in given order and returns the first non-zero result
 *
 * @param comparators
 * @returns the result of the first Comparator that is not `0`, or else `0`
 */
export const chain = <T>(...comparators: Comparator<T>[]): Comparator<T> => {
  return (a, b) =>
    pipe(
      map((comparator: Comparator<T>) => comparator(a, b)),
      dropWhile((value: number) => value === 0),
      first(0)
    )(comparators);
};
