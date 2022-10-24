import { isArray, equal as arrayEqual } from './array';
import { takeUntil } from './generator';
import { isFloat, step } from './number';

export type Range = [number, number];

export const isRange = (value: unknown): value is Range => {
  return isArray(value) && isFloat(value[0]) && isFloat(value[1]);
};

export const toRange = (from: number, to: number): Range => {
  return [from, to];
};

export const equal =
  (rangeA: Range) =>
  (rangeB: Range): boolean => {
    return arrayEqual(rangeA)(rangeB);
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
  return takeUntil((value: number) => Math.abs(value - range[1]) <= 0)(
    step(range[0], inc)
  );
};

export const toArray = (range: Range): number[] => {
  return [...values(range)];
};

export const inRange = (range: Range): ((value: number) => boolean) => {
  const multiplier = direction(range);
  return (value) =>
    multiplier * value >= range[0] * multiplier &&
    multiplier * value < range[1] * multiplier;
};

export const flipDirection = (range: Range): Range => {
  const shift = direction(range);
  return [range[1] - shift, range[0] - shift];
};

export const shift = (range: Range, diff: number): Range => {
  const multiplier = direction(range);
  return range.map((value) => value + multiplier * diff) as Range;
};

export const overlap = (rangeA: Range, rangeB: Range): boolean => {
  if (rangeB[0] < rangeA[0] || isEmpty(rangeB)) {
    return rangeB[1] > rangeA[1];
  } else {
    return rangeB[0] < rangeA[1];
  }
};
