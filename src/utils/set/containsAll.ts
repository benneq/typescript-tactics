import { every } from '../iterable/every';
import { contains } from './contains';
import { SetCompatible } from './_types';

export const containsAll =
  <T>(set: Set<T>) =>
  (value: SetCompatible<T>): boolean => {
    return every(value)(contains(set));
  };
