import { Predicate } from './_types';

/**
 * Combines the provided Predicates with a logical AND
 *
 * @example
 * and() => (() => true)
 * and(alwaysTrue, alwaysTrue) => (() => true)
 * and(alwaysTrue, alwaysFalse) => (() => false)
 * and(alwaysFalse, alwaysFalse) => (() => false)
 *
 * @returns `true` if all provided Predicates return `true`, else `false`
 */
export const and =
  <T>(...predicates: Predicate<[T]>[]): Predicate<[T]> =>
  (value) => {
    return predicates.every((predicate) => predicate(value));
  };
