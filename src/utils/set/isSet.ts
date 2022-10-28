/**
 *
 * @example
 * isSet([]) => false
 * isSet(new Set()) => true
 * isSet(new Map()) => false
 *
 * @param value
 * @returns
 */
export const isSet = <T>(value: unknown): value is Set<T> => {
  return value instanceof Set;
};
