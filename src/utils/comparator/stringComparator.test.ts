import { stringComparator } from './stringComparator';

describe('comparator.stringComparator', () => {
  it('should return a number greater than 0 if valueA > valueB', () => {
    expect(stringComparator()('A', 'a')).toBeGreaterThan(0);
  });

  it('should return a number less than 0 if valueA < valueB', () => {
    expect(stringComparator()('a', 'b')).toBeLessThan(0);
  });

  it('should return 0 if both values are equal', () => {
    expect(stringComparator()('', '')).toBe(0);
    expect(stringComparator()('a', 'a')).toBe(0);
  });
});

export {};
