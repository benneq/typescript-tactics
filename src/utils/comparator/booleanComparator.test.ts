import { booleanComparator } from './booleanComparator';

describe('comparator.booleanComparator', () => {
  it('should return 1 if valueA is true and valueB is false', () => {
    expect(booleanComparator(true, false)).toBeGreaterThan(0);
  });

  it('should return -1 if valueA is false and valueB is true', () => {
    expect(booleanComparator(false, true)).toBeLessThan(0);
  });

  it('should return 0 if both values are equal', () => {
    expect(booleanComparator(true, true)).toBe(0);
    expect(booleanComparator(false, false)).toBe(0);
  });
});

export {};
