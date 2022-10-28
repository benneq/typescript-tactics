import { Predicate } from './_types';

/**
 * A Predicate that returns always `true`
 *
 * @example
 * alwaysTrue() => true
 * [1,2,3].filter(alwaysTrue) => [1,2,3]
 *
 * @returns `true`
 */
export const alwaysTrue: Predicate<unknown[]> = () => true;
