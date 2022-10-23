import { isSet } from './set';

export type ArrayCompatible<T> = T[] | Set<T>;

export const isArray = <T>(value: unknown): value is Array<T> => {
  return Array.isArray(value);
};

export const toArray = <T>(value: T | ArrayCompatible<T>): T[] => {
  return isArray(value) ? value : isSet(value) ? Array.from(value) : [value];
};

export const nth = <T extends unknown[], I extends number = 0>(
  array: T,
  index: I = 0 as I
): T[I] => {
  return array.at(index);
};

// mutating

export const insertAtIndex = <T>(
  array: T[],
  index: number,
  ...values: T[]
): void => {
  array.splice(index, 0, ...values);
};
