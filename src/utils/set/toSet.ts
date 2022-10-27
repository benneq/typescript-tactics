import { from } from '../array/from';
import { isSet } from './isSet';
import { SetCompatible } from './_types';

export const toSet = <T>(value: T | SetCompatible<T>): Set<T> => {
  if (isSet(value)) {
    return value;
  }

  return new Set(from(value));
};
