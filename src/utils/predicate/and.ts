import { Predicate } from './_types';

/**
 * Combines the provided Predicates with a logical AND
 *
 * @returns `true` if all provided Predicates return `true`, else `false`
 */
export const and =
  <T>(...predicates: Predicate<[T]>[]): Predicate<[T]> =>
  (value) => {
    return predicates.every((predicate) => predicate(value));
  };
