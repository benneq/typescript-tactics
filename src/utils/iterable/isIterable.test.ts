import { isIterable } from './isIterable';

describe('iterable.isIterable', () => {
  it('isIterable', () => {
    expect(isIterable(undefined)).toEqual(false);
    expect(isIterable(null)).toEqual(false);
    expect(isIterable(NaN)).toEqual(false);
    expect(isIterable(0)).toEqual(false);
    expect(isIterable(true)).toEqual(false);
    expect(isIterable(Symbol())).toEqual(false);
    expect(isIterable({})).toEqual(false);
    expect(isIterable('')).toEqual(true);
    expect(isIterable([])).toEqual(true);
    expect(isIterable(new Set())).toEqual(true);
    expect(isIterable(new Map())).toEqual(true);
    expect(isIterable(jest.fn())).toEqual(false);
  });
});

export {};
