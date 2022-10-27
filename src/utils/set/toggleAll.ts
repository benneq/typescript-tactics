import { toggle } from './toggle';
import { SetCompatible } from './_types';

export const toggleAll =
  <T>(set: Set<T>) =>
  (value: SetCompatible<T>): void => {
    value.forEach(toggle(set));
  };
