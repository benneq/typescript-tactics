import { Predicate } from './_types';

/**
 * Inverts the provided Predicate with a logical NOT
 *
 * @example
 * not(alwaysTrue) => (() => false)
 * not(alwaysFalse) => (() => true)
 *
 * @returns `true` if the provided Predicate return `false`, else `false`
 */
export const not = <T>(predicate: Predicate<[T]>): Predicate<[T]> => {
  return (value: T) => !predicate(value);
};
