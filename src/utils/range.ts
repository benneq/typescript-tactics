import { isArray } from './array';
import { isFloat } from './number';

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

export function* values(range: Range): Generator<number, void, unknown> {
  const inc = direction(range);
  let start = range[0];

  for (let i = 0; i < length(range); i++) {
    yield start;
    start += inc;
  }
}

export const toArray = (range: Range): number[] => {
  return [...values(range)];
};

export const inRange =
  (from: number, to: number) =>
  (value: number): boolean => {
    return value >= from && value < to;
  };

export const flip = (range: Range): Range => {
  const shift = direction(range);
  return [range[1] - shift, range[0] - shift];
};
