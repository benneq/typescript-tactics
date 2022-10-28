import { toMap } from './toMap';

describe('map.toMap', () => {
  it('toMap', () => {
    expect(toMap([])).toEqual(new Map());
    expect(toMap(new Set<any>())).toEqual(new Map());
    expect(toMap(new Map())).toEqual(new Map());

    const key = Symbol();
    const value = Symbol();
    expect(toMap([[key, value]])).toEqual(new Map([[key, value]]));
    expect(toMap(new Set([[key, value]]))).toEqual(new Map([[key, value]]));
    expect(toMap(new Map([[key, value]]))).toEqual(new Map([[key, value]]));
  });
});

export {};
