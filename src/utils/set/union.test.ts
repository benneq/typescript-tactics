import { union } from './union';

describe('set.union', () => {
  it('union', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    expect(union(new Set(), new Set())).toEqual(new Set());
    expect(union(new Set([value1]), new Set())).toEqual(new Set([value1]));
    expect(union(new Set(), new Set([value1]))).toEqual(new Set([value1]));
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
