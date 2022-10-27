import { copy } from './copy';
import { toggleAll } from './toggleAll';
import { SetCompatible } from './_types';

export const symmetricDifference = <T>(
  setA: Set<T>,
  setB: SetCompatible<T>
): Set<T> => {
  const difference = copy(setA);
  toggleAll(difference)(setB);
  return difference;
};
