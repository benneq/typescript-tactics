import { isArray } from './array';
import { takeUntil } from './generator';
import { isFloat, step } from './number';

/**
 * TODO: discuss
 * integer, float, bigint => yes, both, because no artificial restrictions
 * Infinity, NaN => no, because useless information, can use Number.MAX_VALUE instead
 * negative range => yes, because can be ascending and descending
 * start inclusive => yes, because that's expected
 * end excusive => yes, because it allows for empty ranges
 */

export type Range = [number, number];

export const isRange = (value: unknown): value is Range => {
  return isArray(value) && isFloat(value[0]) && isFloat(value[1]);
};

export const toRange = (from: number, to: number): Range => {
  return [from, to];
};

export const isEmpty = (range: Range): boolean => {
  return range[0] === range[1];
};

export const direction = (range: Range): 1 | 0 | -1 => {
  return Math.sign(range[1] - range[0]) as 1 | 0 | -1;
};

export const length = (range: Range): number => {
  return Math.abs(range[1] - range[0]);
};

export const values = (range: Range): Generator<number, void, unknown> => {
  const inc = direction(range);

  return takeUntil(step(range[0], inc), (value) =>
    inc === 1 ? value >= range[1] : value <= range[1]
  );
};

export const toArray = (range: Range): number[] => {
  return [...values(range)];
};

export const inRange =
  (range: Range) =>
  (value: number): boolean => {
    if (direction(range) > 0) {
      return value >= range[0] && value < range[1];
    } else {
      return value <= range[0] && value > range[1];
    }
  };

export const flip = (range: Range): Range => {
  const shift = direction(range);
  return [range[1] - shift, range[0] - shift];
};
