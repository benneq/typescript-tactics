import { some } from '../iterable/some';
import { contains } from './contains';
import { SetCompatible } from './_types';

export const containsAny =
  <T>(set: Set<T>) =>
  (value: SetCompatible<T>): boolean => {
    return some(value)(contains(set));
  };
