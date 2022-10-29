import { equal } from './equal';

describe('range.equal', () => {
  it('should return true if both Ranges have the same start and end', () => {
    const result = equal([1, 2])([1, 2]);

    expect(result).toBe(true);
  });

  it('should return false if start is not equal', () => {
    const result = equal([0, 1])([1, 1]);

    expect(result).toBe(false);
  });

  it('should return false if end is not equal', () => {
    const result = equal([0, 1])([0, 2]);

    expect(result).toBe(false);
  });
});

export {};
