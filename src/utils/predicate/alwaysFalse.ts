import { Predicate } from './_types';

/**
 * A Predicate that returns always `false`
 *
 * @returns `false`
 */
export const alwaysFalse: Predicate<unknown[]> = () => false;
