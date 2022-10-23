import { toArray } from './array';

describe('array', () => {
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
});

export {};
