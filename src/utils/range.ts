import { isArray } from './array';
import { isFloat, NumberCompatible, toNumber } from './number';
import { Callback } from './types';

/**
 * TODO: discuss
 * integer, float, bigint => yes, both, because no artificial restrictions
 * Infinity, NaN => no, because useless information, can use Number.MAX_VALUE instead
 * negative range => yes, because can be ascending and descending
 * start inclusive => yes, because that's expected
 * end excusive => yes, because it allows for empty ranges
 */

export type Range<T extends NumberCompatible = NumberCompatible> = [T, T];

export const isRange = (value: unknown): value is Range => {
  return isArray(value) && isFloat(value[0]) && isFloat(value[1]);
};

export const toRange = (from: number, to: number): Range => {
  return [from, to];
};

export const isEmpty = (range: Range): boolean => {
  return range[0] === range[1];
};

export const length = (range: Range): number => {
  return toNumber(range[1]) - toNumber(range[0]) + 1;
};

export const toArray = (range: Range): number[] => {
  return Array.from(
    { length: length(range) },
    (_, k) => k + toNumber(range[0])
  );
};

export const forEach =
  (range: Range) => (callback: Callback<[NumberCompatible]>) => {
    for (let i = range[0]; i <= range[1]; i++) {
      callback(i);
    }
  };

export const inRange =
  (from: number, to: number) =>
  (value: number): boolean => {
    return value >= from && value < to;
  };
