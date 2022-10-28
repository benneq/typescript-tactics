import { numberComparator } from './numberComparator';
import { undefinedFirst } from './undefinedFirst';

describe('comparator.undefinedFirst', () => {
  it('should return 0 if both values are undefined', () => {
    const comparator = undefinedFirst(numberComparator);
    expect(comparator(undefined, undefined)).toBe(0);
  });

  it('should return -1 if only the first value is undefined', () => {
    const comparator = undefinedFirst(numberComparator);
    expect(comparator(undefined, 1)).toBe(-1);
  });

  it('should return 1 if only the second value is undefined', () => {
    const comparator = undefinedFirst(numberComparator);
    expect(comparator(1, undefined)).toBe(1);
  });

  it('should return the result of the given comparator if both values are not undefined', () => {
    const result = 42;
    const comparator = undefinedFirst(() => result);
    expect(comparator(Symbol(), Symbol())).toBe(result);
  });
});

export {};
