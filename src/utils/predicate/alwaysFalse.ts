/**
 * A Predicate that returns always `false`
 *
 * @example
 * alwaysFalse() => false
 * [1,2,3].filter(alwaysFalse) => []
 *
 * @returns `false`
 */
export const alwaysFalse = (arg?: unknown, ..._: unknown[]): arg is unknown =>
  false;
