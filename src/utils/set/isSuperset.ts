import { containsAll } from './containsAll';

export const isSuperset = <T>(set: Set<T>, subset: Set<T>): boolean => {
  return containsAll(set)(subset);
};
