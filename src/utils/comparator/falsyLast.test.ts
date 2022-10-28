import { falsyLast } from './falsyLast';
import { numberComparator } from './numberComparator';

describe('comparator.falsyLast', () => {
  it('should return 0 if both values are falsy', () => {
    const comparator = falsyLast(numberComparator);
    expect(comparator(undefined, undefined)).toBe(0);
    expect(comparator(undefined, 0)).toBe(0);
    expect(comparator(null, '')).toBe(0);
  });

  it('should return 1 if only the first value is falsy', () => {
    const comparator = falsyLast(numberComparator);
    expect(comparator(null, 1)).toBe(1);
  });

  it('should return -1 if only the second value is falsy', () => {
    const comparator = falsyLast(numberComparator);
    expect(comparator(1, null)).toBe(-1);
  });

  it('should return the result of the given comparator if both values are not falsy', () => {
    const result = 42;
    const comparator = falsyLast(() => result);
    expect(comparator(Symbol(), Symbol())).toBe(result);
  });
});

export {};
