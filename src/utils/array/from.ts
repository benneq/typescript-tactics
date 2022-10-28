import { isSet } from '../set/isSet';
import { isArray } from './isArray';

/**
 * Union of types that can be converted to Array
 */
export type ArrayCompatible<T> = T[] | Set<T>;

/**
 * Converts the provided value to an Array if necessary
 *
 * @example
 * from(null) => [null]
 * from("") => [""]
 * from([1,2,3]) => [1,2,3]
 * from(new Set()) => []
 *
 * @param value
 * @returns either the provided value itself if it already was an Array, or a new Array
 */
export const from = <T>(value: T | ArrayCompatible<T>): T[] => {
  return isArray(value) ? value : isSet(value) ? Array.from(value) : [value];
};
