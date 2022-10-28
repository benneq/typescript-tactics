import { toMap } from './toMap';

describe('map.toMap', () => {
  it('should return the same instance if the provided value is already a Map', () => {
    const map1 = new Map();
    expect(toMap(map1)).toBe(map1);
    expect(toMap(map1)).toEqual(new Map());

    const key = Symbol();
    const value = Symbol();
    const map2 = new Map([[key, value]]);
    expect(toMap(map2)).toBe(map2);
    expect(toMap(map2)).toEqual(new Map([[key, value]]));
  });

  it('should copy all key-value pairs into a new Array', () => {
    const key = Symbol();
    const value = Symbol();

    expect(toMap([[key, value]])).toEqual(new Map([[key, value]]));
    expect(toMap(new Set([[key, value]]))).toEqual(new Map([[key, value]]));
  });
});

export {};
