import { symmetricDifference } from './symmetricDifference';

describe('set.symmetricDifference', () => {
  it('should return an empty Set if both sets are empty', () => {
    expect(symmetricDifference(new Set(), new Set())).toEqual(new Set());
  });

  it('should return an empty Set if both sets contain the same elements', () => {
    const value1 = Symbol();
    const value2 = Symbol();

    expect(symmetricDifference(new Set([value1]), new Set([value1]))).toEqual(
      new Set()
    );

    expect(
      symmetricDifference(new Set([value1, value2]), new Set([value1, value2]))
    ).toEqual(new Set());
  });

  it('should return a new Set containing the elements of setA if setB is empty', () => {
    const value1 = Symbol();
    const value2 = Symbol();

    expect(symmetricDifference(new Set([value1, value2]), new Set())).toEqual(
      new Set([value1, value2])
    );
  });

  it('should return a new Set containing the elements of setB if setA is empty', () => {
    const value1 = Symbol();
    const value2 = Symbol();

    expect(symmetricDifference(new Set(), new Set([value1, value2]))).toEqual(
      new Set([value1, value2])
    );
  });

  it('should return a new Set containing the elements of setA and setB that are not in the other Set', () => {
    const value1 = Symbol();
    const value2 = Symbol();

    expect(symmetricDifference(new Set([value1]), new Set([value2]))).toEqual(
      new Set([value1, value2])
    );

    expect(
      symmetricDifference(new Set([value1]), new Set([value1, value2]))
    ).toEqual(new Set([value2]));

    expect(
      symmetricDifference(new Set([value1, value2]), new Set([value1]))
    ).toEqual(new Set([value2]));
  });
});

export {};
