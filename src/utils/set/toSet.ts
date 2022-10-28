import { from } from '../array';
import { isSet } from './isSet';
import { SetCompatible } from './_types';

/**
 *
 * @example
 * toSet([1,2,3]) => [1,2,3]
 *
 * @param value
 * @returns
 */
export const toSet = <T>(value: T | SetCompatible<T>): Set<T> => {
  if (isSet(value)) {
    return value;
  }

  return new Set(from(value));
};
