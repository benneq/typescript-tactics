import { Predicate } from './_types';

/**
 * Combines the provided Predicates with a logical OR
 *
 * @returns `true` if any of the provided Predicates return `true`, else `false`
 */
export const or =
  <T>(...predicates: Predicate<[T]>[]): Predicate<[T]> =>
  (value) => {
    return predicates.some((predicate) => predicate(value));
  };
