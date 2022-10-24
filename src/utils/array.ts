import { inRange } from './number';
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

export const inArray = <T>(array: T[]): ((value: number) => boolean) => {
  return inRange(0, array.length);
};

// mutations

export const insertAt = <T>(
  array: T[],
  index: number,
  ...values: T[]
): void => {
  array.splice(index, 0, ...values);
};

export const removeAt = <T>(array: T[], index: number): void => {
  array.splice(index, 1);
};

export const move = <T>(
  array: T[],
  sourceIndex: number,
  targetIndex: number
): void => {
  if (sourceIndex < array.length) {
    array.splice(targetIndex, 0, array.splice(sourceIndex, 1)[0] as T);
  }
};

export const swap = <T>(array: T[], indexA: number, indexB: number): void => {
  const isInArray = inArray(array);
  if (isInArray(indexA) && isInArray(indexB)) {
    const temp = array[indexA] as T;
    array[indexA] = array[indexB] as T;
    array[indexB] = temp;
  }
};
