import { add } from './add';
import { contains } from './contains';
import { remove } from './remove';

export const toggle =
  <T>(set: Set<T>) =>
  (value: T): void => {
    const action = contains(set)(value) ? remove : add;
    action(set)(value);
  };
