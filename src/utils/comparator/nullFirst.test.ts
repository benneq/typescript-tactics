import { nullFirst } from './nullFirst';
import { numberComparator } from './numberComparator';

describe('comparator.nullFirst', () => {
  it('should return 0 if both values are null', () => {
    const comparator = nullFirst(numberComparator);
    expect(comparator(null, null)).toBe(0);
  });

  it('should return -1 if only the first value is null', () => {
    const comparator = nullFirst(numberComparator);
    expect(comparator(null, 1)).toBe(-1);
  });

  it('should return 1 if only the second value is null', () => {
    const comparator = nullFirst(numberComparator);
    expect(comparator(1, null)).toBe(1);
  });

  it('should return the result of the given comparator if both values are not null', () => {
    const result = 42;
    const comparator = nullFirst(() => result);
    expect(comparator(Symbol(), Symbol())).toBe(result);
  });
});

export {};
