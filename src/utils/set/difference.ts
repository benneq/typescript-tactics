import { copy } from './copy';
import { removeAll } from './removeAll';
import { SetCompatible } from './_types';

export const difference = <T>(setA: Set<T>, setB: SetCompatible<T>): Set<T> => {
  const difference = copy(setA);
  removeAll(difference)(setB);
  return difference;
};
