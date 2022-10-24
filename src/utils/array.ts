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

// mutations

export const insertAtIndex = <T>(
  array: T[],
  index: number,
  ...values: T[]
): void => {
  array.splice(index, 0, ...values);
};

export const moveIndex = <T>(
  array: T[],
  sourceIndex: number,
  targetIndex: number
): void => {
  if (sourceIndex < array.length) {
    array.splice(targetIndex, 0, array.splice(sourceIndex, 1)[0] as T);
  }
};

export const swapIndex = <T>(
  array: T[],
  indexA: number,
  indexB: number
): void => {
  if (
    indexA >= 0 &&
    indexA < array.length &&
    indexB >= 0 &&
    indexB < array.length
  ) {
    const temp = array[indexA] as T;
    array[indexA] = array[indexB] as T;
    array[indexB] = temp;
  }
};
