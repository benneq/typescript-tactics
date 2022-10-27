import { isSubset } from './isSubset';

describe('set.isSubset', () => {
  it('isSubset', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    expect(isSubset(new Set(), new Set())).toEqual(true);
    expect(isSubset(new Set([value1]), new Set())).toEqual(false);
    expect(isSubset(new Set(), new Set([value1]))).toEqual(true);
    expect(isSubset(new Set([value1]), new Set([value1]))).toEqual(true);

    expect(isSubset(new Set([value1]), new Set([value2]))).toEqual(false);
    expect(isSubset(new Set([value1]), new Set([value1, value2]))).toEqual(
      true
    );
    expect(isSubset(new Set([value1, value2]), new Set([value1]))).toEqual(
      false
    );
  });
});

export {};
