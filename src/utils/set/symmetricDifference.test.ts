import { symmetricDifference } from './symmetricDifference';

describe('set.symmetricDifference', () => {
  it('symmetricDifference', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    expect(symmetricDifference(new Set(), new Set())).toEqual(new Set());
    expect(symmetricDifference(new Set([value1]), new Set())).toEqual(
      new Set([value1])
    );
    expect(symmetricDifference(new Set(), new Set([value1]))).toEqual(
      new Set([value1])
    );
    expect(symmetricDifference(new Set([value1]), new Set([value1]))).toEqual(
      new Set()
    );

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
