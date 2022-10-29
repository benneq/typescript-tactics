import { isArray } from './array';
import { equal as arrayEqual } from './array';
import { toArray as iterableToArray } from './iterable/toArray';
import { Predicate } from './predicate/_types';
import { isFloat } from './number/isFloat';
import { numberSequenceGenerator } from './number/numberSequenceGenerator';
import { done } from './generator/done';
import { takeWhile } from './iterable/takeWhile';

export type Range = [number, number];

export const isRange = (value: unknown): value is Range => {
  return isArray(value) && isFloat(value[0]) && isFloat(value[1]);
};

export const toRange = (start: number, end: number): Range => {
  return [start, end];
};

export const equal = (rangeA: Range): Predicate<[Range]> => {
  return arrayEqual(rangeA);
};

export const isEmpty: Predicate<[Range]> = (range) => {
  return range[0] === range[1];
};

export const isAscending: Predicate<[Range]> = (range) => {
  return direction(range) === 1;
};

export const isDescending: Predicate<[Range]> = (range) => {
  return direction(range) === -1;
};

export const contains = (range: Range): Predicate<[number]> => {
  const [rangeStart, rangeEnd] = toAscending(range);
  return (value) => value >= rangeStart && value < rangeEnd;
};

export const encloses = (outerRange: Range, innerRange: Range): boolean => {
  const [outerStart, outerEnd] = toAscending(outerRange);
  const [innerStart, innerEnd] = toAscending(innerRange);
  return outerStart <= innerStart && outerEnd >= innerEnd;
};

export const overlap = (rangeA: Range, rangeB: Range): boolean => {
  const [startA, endA] = toAscending(rangeA);
  const [startB, endB] = toAscending(rangeB);
  return startA < endB && endA > startB;
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
  if (stepSize <= 0) {
    return done;
  }

  const stepSign = direction(range);
  return takeWhile(contains(range))(
    numberSequenceGenerator(range[0], stepSign * stepSize)
  );
};

export const toArray = (range: Range, stepSize?: number): number[] => {
  return iterableToArray(values(range, stepSize));
};

export const flipDirection = (range: Range): Range => {
  const diff = direction(range);
  return [range[1] - diff, range[0] - diff];
};

export const toAscending = (range: Range): Range => {
  return isAscending(range) ? range : flipDirection(range);
};

export const toDescending = (range: Range): Range => {
  return isDescending(range) ? range : flipDirection(range);
};

export const shift = (range: Range, stepSize: number): Range => {
  const diff = direction(range) * stepSize;
  return [range[0] + diff, range[1] + diff];
};
