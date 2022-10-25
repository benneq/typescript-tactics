import { isArray, equal as arrayEqual } from './array';
import { takeWhile } from './generator';
import { isFloat, step } from './number';
import { and, Predicate } from './predicate';

export type Range = [number, number];

export const isRange = (value: unknown): value is Range => {
  return isArray(value) && isFloat(value[0]) && isFloat(value[1]);
};

export const toRange = (from: number, to: number): Range => {
  return [from, to];
};

export const equal = (rangeA: Range): ((rangeB: Range) => boolean) => {
  return arrayEqual(rangeA);
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

export const values = (
  range: Range,
  stepSize = 1
): Generator<number, void, unknown> => {
  const multiplier = direction(range);
  return takeWhile(inRange(range))(step(range[0], multiplier * stepSize));
};

export const toArray = (range: Range): number[] => {
  return [...values(range)];
};

export const isAscending = (range: Range): boolean => {
  return direction(range) === 1;
};

export const toAscending = (range: Range): Range => {
  return isAscending(range) ? range : flipDirection(range);
};

export const inRange = (range: Range): Predicate<number> => {
  const [rangeStart, rangeEnd] = toAscending(range);
  return (value) => value >= rangeStart && value < rangeEnd;
};

export const flipDirection = (range: Range): Range => {
  const shift = direction(range);
  return [range[1] - shift, range[0] - shift];
};

export const shift = (range: Range, stepSize: number): Range => {
  const diff = direction(range) * stepSize;
  return [range[0] + diff, range[1] + diff];
};

export const overlap = (rangeA: Range, rangeB: Range): boolean => {
  if (rangeB[0] < rangeA[0] || isEmpty(rangeB)) {
    return rangeB[1] > rangeA[1];
  } else {
    return rangeB[0] < rangeA[1];
  }
};
