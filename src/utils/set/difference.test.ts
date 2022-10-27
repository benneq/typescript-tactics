import { difference } from './difference';

describe('set.difference', () => {
  it('difference', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    expect(difference(new Set(), new Set())).toEqual(new Set());
    expect(difference(new Set([value1]), new Set())).toEqual(new Set([value1]));
    expect(difference(new Set(), new Set([value1]))).toEqual(new Set());
    expect(difference(new Set([value1]), new Set([value1]))).toEqual(new Set());

    expect(difference(new Set([value1]), new Set([value2]))).toEqual(
      new Set([value1])
    );
    expect(difference(new Set([value1]), new Set([value1, value2]))).toEqual(
      new Set()
    );
    expect(difference(new Set([value1, value2]), new Set([value1]))).toEqual(
      new Set([value2])
    );
  });
});

export {};
