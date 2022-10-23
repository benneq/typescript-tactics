import { isArray, nth, toArray } from './array';

describe('array', () => {
  it('isArray', () => {
    expect(isArray(undefined)).toEqual(false);
    expect(isArray(null)).toEqual(false);
    expect(isArray(NaN)).toEqual(false);
    expect(isArray(0)).toEqual(false);
    expect(isArray(true)).toEqual(false);
    expect(isArray({})).toEqual(false);
    expect(isArray('')).toEqual(false);
    expect(isArray([])).toEqual(true);
    expect(isArray(new Set())).toEqual(false);
    expect(isArray(new Map())).toEqual(false);
    expect(isArray(jest.fn())).toEqual(false);
  });

  it('toArray', () => {
    expect(toArray(undefined)).toEqual([undefined]);
    expect(toArray(null)).toEqual([null]);
    expect(toArray(NaN)).toEqual([NaN]);
    expect(toArray(0)).toEqual([0]);
    expect(toArray(true)).toEqual([true]);
    expect(toArray({})).toEqual([{}]);
    expect(toArray('')).toEqual(['']);
    expect(toArray([])).toEqual([]);
    expect(toArray(new Set())).toEqual([]);
    expect(toArray(new Map())).toEqual([new Map()]);
  });

  it('nth', () => {
    expect(nth([])).toEqual(undefined);
    expect(nth([0])).toEqual(0);
    expect(nth([0, 1])).toEqual(0);

    expect(nth([], 1)).toEqual(undefined);
    expect(nth([0], 1)).toEqual(undefined);
    expect(nth([0, 1], 1)).toEqual(1);
  });
});

export {};
