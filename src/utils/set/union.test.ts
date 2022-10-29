import { union } from './union';

describe('set.union', () => {
  it('should return an empty Set if both Sets are empty', () => {
    expect(union(new Set(), new Set())).toEqual(new Set());
  });

  it('should return a new Set containing the elements of setA if setB is empty', () => {
    const value1 = Symbol();
    const value2 = Symbol();

    expect(union(new Set([value1, value2]), new Set())).toEqual(
      new Set([value1, value2])
    );
  });

  it('should return a new Set containing the elements of setB if setA is empty', () => {
    const value1 = Symbol();
    const value2 = Symbol();

    expect(union(new Set(), new Set([value1, value2]))).toEqual(
      new Set([value1, value2])
    );
  });

  it('should return a new Set containing all elements of setA and setB', () => {
    const value1 = Symbol();
    const value2 = Symbol();

    expect(union(new Set([value1]), new Set([value1]))).toEqual(
      new Set([value1])
    );

    expect(union(new Set([value1]), new Set([value2]))).toEqual(
      new Set([value1, value2])
    );

    expect(union(new Set([value1]), new Set([value1, value2]))).toEqual(
      new Set([value1, value2])
    );

    expect(union(new Set([value1, value2]), new Set([value1]))).toEqual(
      new Set([value1, value2])
    );
  });
});

export {};
