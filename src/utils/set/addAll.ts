import { add } from './add';
import { SetCompatible } from './_types';

export const addAll =
  <T>(set: Set<T>) =>
  (value: SetCompatible<T>): void => {
    value.forEach(add(set));
  };
