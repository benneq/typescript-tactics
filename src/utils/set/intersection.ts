import { contains } from './contains';
import { filter } from './filter';

export const intersection = <T>(setA: Set<T>, setB: Set<T>): Set<T> => {
  return filter(setB)(contains(setA));
};
