import { from } from './from';

describe('array.from', () => {
  it('from', () => {
    expect(from(undefined)).toEqual([undefined]);
    expect(from(null)).toEqual([null]);
    expect(from(NaN)).toEqual([NaN]);
    expect(from(0)).toEqual([0]);
    expect(from(true)).toEqual([true]);
    expect(from({})).toEqual([{}]);
    expect(from('')).toEqual(['']);
    expect(from([])).toEqual([]);
    expect(from(new Set())).toEqual([]);
    expect(from(new Map())).toEqual([new Map()]);
  });
});

export {};
