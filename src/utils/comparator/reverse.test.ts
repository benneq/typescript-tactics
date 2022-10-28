import { numberComparator } from './numberComparator';
import { reverse } from './reverse';

describe('comparator.reverse', () => {
  it('should reverse the result of the given Comparator', () => {
    expect(reverse(numberComparator)(0, 0)).toBe(-0);
    expect(reverse(numberComparator)(1, 2)).toBeGreaterThan(0);
    expect(reverse(numberComparator)(1, -1)).toBeLessThan(0);
  });
});

export {};
