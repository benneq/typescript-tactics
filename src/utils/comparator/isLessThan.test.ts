import { isLessThan } from './isLessThan';
import { numberComparator } from './numberComparator';

describe('comparator.isLessThan', () => {
  it('should return true if a < b', () => {
    expect(isLessThan(numberComparator)(1, 2)).toBe(true);
  });

  it('should return false if a >= b', () => {
    expect(isLessThan(numberComparator)(0, 0)).toBe(false);
    expect(isLessThan(numberComparator)(2, -1)).toBe(false);
  });
});

export {};
