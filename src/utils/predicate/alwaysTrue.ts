import { Predicate } from './_types';

/**
 * A Predicate that returns always `true`
 *
 * @returns `true`
 */
export const alwaysTrue: Predicate<unknown[]> = () => true;
