/**
 * A Predicate that returns always `true`
 *
 * @example
 * alwaysTrue() => true
 * [1,2,3].filter(alwaysTrue) => [1,2,3]
 *
 * @returns `true`
 */
export const alwaysTrue = (arg?: unknown, ..._: unknown[]): arg is unknown =>
  true;
