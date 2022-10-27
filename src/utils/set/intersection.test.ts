import { intersection } from './intersection';

describe('set.intersection', () => {
  it('intersection', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    expect(intersection(new Set(), new Set())).toEqual(new Set());
    expect(intersection(new Set([value1]), new Set())).toEqual(new Set());
    expect(intersection(new Set(), new Set([value1]))).toEqual(new Set());
    expect(intersection(new Set([value1]), new Set([value1]))).toEqual(
      new Set([value1])
    );

    expect(intersection(new Set([value1]), new Set([value2]))).toEqual(
      new Set()
    );
    expect(intersection(new Set([value1]), new Set([value1, value2]))).toEqual(
      new Set([value1])
    );
    expect(intersection(new Set([value1, value2]), new Set([value1]))).toEqual(
      new Set([value1])
    );
  });
});

export {};
