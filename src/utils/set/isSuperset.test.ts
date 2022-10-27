import { isSuperset } from './isSuperset';

describe('set.isSuperset', () => {
  it('isSuperset', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    expect(isSuperset(new Set(), new Set())).toEqual(true);
    expect(isSuperset(new Set([value1]), new Set())).toEqual(true);
    expect(isSuperset(new Set(), new Set([value1]))).toEqual(false);
    expect(isSuperset(new Set([value1]), new Set([value1]))).toEqual(true);

    expect(isSuperset(new Set([value1]), new Set([value2]))).toEqual(false);
    expect(isSuperset(new Set([value1]), new Set([value1, value2]))).toEqual(
      false
    );
    expect(isSuperset(new Set([value1, value2]), new Set([value1]))).toEqual(
      true
    );
  });
});

export {};
