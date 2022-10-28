import { equal } from './equal';

describe('array.equal', () => {
  it('should return true if both arrays have the same elements in the same order', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const arrayA = [value1, value2];
    const arrayB = [value1, value2];

    const result = equal(arrayA)(arrayB);

    expect(result).toBe(true);
  });

  it('should return false if array length does not match', () => {
    const arrayA = new Array(0);
    const arrayB = new Array(1);

    const result = equal(arrayA)(arrayB);

    expect(result).toBe(false);
  });

  it('should return false if element order does not match', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const arrayA = [value1, value2];
    const arrayB = [value2, value1];

    const result = equal(arrayA)(arrayB);

    expect(result).toBe(false);
  });
});

export {};
