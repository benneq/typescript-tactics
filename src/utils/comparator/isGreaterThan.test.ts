import { isGreaterThan } from './isGreaterThan';
import { numberComparator } from './numberComparator';

describe('comparator.isGreaterThan', () => {
  it('should return true if a > b', () => {
    expect(isGreaterThan(numberComparator)(2, 1)).toBe(true);
  });

  it('should return false if a <= b', () => {
    expect(isGreaterThan(numberComparator)(0, 0)).toBe(false);
    expect(isGreaterThan(numberComparator)(-1, 2)).toBe(false);
  });
});

export {};
