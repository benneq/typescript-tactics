import { remove } from './remove';
import { SetCompatible } from './_types';

export const removeAll =
  <T>(set: Set<T>) =>
  (value: SetCompatible<T>): void => {
    value.forEach(remove(set));
  };
