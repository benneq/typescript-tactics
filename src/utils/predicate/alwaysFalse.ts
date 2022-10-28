import { Predicate } from './_types';

/**
 * A Predicate that returns always `false`
 *
 * @example
 * alwaysFalse() => false
 * [1,2,3].filter(alwaysFalse) => []
 *
 * @returns `false`
 */
export const alwaysFalse: Predicate<unknown[]> = () => false;
