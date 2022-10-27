import { toSet } from './toSet';

describe('set.toSet', () => {
  it('toSet', () => {
    expect(toSet(null)).toEqual(new Set([null]));
    expect(toSet({})).toEqual(new Set([{}]));
    expect(toSet('')).toEqual(new Set(['']));
    expect(toSet([])).toEqual(new Set());
    expect(toSet(new Set())).toEqual(new Set());
    expect(toSet(new Map())).toEqual(new Set([new Map()]));

    const value = Symbol();
    expect(toSet([value])).toEqual(new Set([value]));
    expect(toSet(new Set([value]))).toEqual(new Set([value]));
    expect(toSet(new Map([[value, value]]))).toEqual(
      new Set([new Map([[value, value]])])
    );
  });
});

export {};
