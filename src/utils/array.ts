import { isSet } from './set';

export type ArrayCompatible<T> = T[] | Set<T>;

export const isArray = <T>(value: unknown): value is Array<T> => {
  return Array.isArray(value);
};

export const toArray = <T>(value: T | ArrayCompatible<T>): T[] => {
  return isArray(value) ? value : isSet(value) ? Array.from(value) : [value];
};
