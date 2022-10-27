import { addAll } from './addAll';
import { copy } from './copy';
import { SetCompatible } from './_types';

export const union = <T>(setA: Set<T>, setB: SetCompatible<T>): Set<T> => {
  const union = copy(setA);
  addAll(union)(setB);
  return union;
};
