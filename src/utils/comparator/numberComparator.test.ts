import { numberComparator } from './numberComparator';

describe('comparator.numberComparator', () => {
  it('should return a number greater than 0 if valueA > valueB', () => {
    expect(numberComparator(3, 1)).toBeGreaterThan(0);
  });

  it('should return a number less than 0 if valueA < valueB', () => {
    expect(numberComparator(1, 3)).toBeLessThan(0);
  });

  it('should return 0 if both values are equal', () => {
    expect(numberComparator(-1, -1)).toBe(0);
    expect(numberComparator(0, 0)).toBe(0);
  });
});

export {};
