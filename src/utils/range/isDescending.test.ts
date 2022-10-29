import { isDescending } from './isDescending';

describe('range.isDescending', () => {
  it('should return true if start is greater than end', () => {
    const result = isDescending([2, 1]);

    expect(result).toBe(true);
  });

  it('should return false if start is equal to end', () => {
    const result = isDescending([0, 0]);

    expect(result).toBe(false);
  });

  it('should return false if start is less than end', () => {
    const result = isDescending([1, 2]);

    expect(result).toBe(false);
  });
});

export {};
