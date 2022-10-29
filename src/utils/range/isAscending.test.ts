import { isAscending } from './isAscending';

describe('rnnge.isAscending', () => {
  it('should return true if start is less than end', () => {
    const result = isAscending([1, 2]);

    expect(result).toBe(true);
  });

  it('should return false if start is equal to end', () => {
    const result = isAscending([0, 0]);

    expect(result).toBe(false);
  });

  it('should return false if start is greater than end', () => {
    const result = isAscending([2, 1]);

    expect(result).toBe(false);
  });
});

export {};
