import {
  copy,
  filter,
  filterKeys,
  filterValues,
  fromIterable,
  isEmpty,
  isMap,
  keySet,
  mapValues,
  toMap,
} from './map';

describe('map', () => {
  it('isMap', () => {
    expect(isMap(undefined)).toEqual(false);
    expect(isMap(null)).toEqual(false);
    expect(isMap(NaN)).toEqual(false);
    expect(isMap(0)).toEqual(false);
    expect(isMap(true)).toEqual(false);
    expect(isMap({})).toEqual(false);
    expect(isMap('')).toEqual(false);
    expect(isMap([])).toEqual(false);
    expect(isMap(new Set())).toEqual(false);
    expect(isMap(new Map())).toEqual(true);
    expect(isMap(jest.fn())).toEqual(false);
  });

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

  it('copy', () => {
    const set1 = new Map();
    const res1 = copy(set1);
    expect(res1).toEqual(new Map());
    expect(res1).not.toBe(set1);

    const key = Symbol();
    const value = Symbol();
    const set2 = new Map([[key, value]]);
    const res2 = copy(set2);
    expect(res2).toEqual(new Map([[key, value]]));
    expect(res2).not.toBe(set2);
  });

  it('filter', () => {
    const map1 = new Map();
    expect(filter(() => true)(map1)).not.toBe(map1);
    expect(filter(() => true)(map1)).toEqual(new Map());
    expect(filter(() => false)(map1)).not.toBe(map1);
    expect(filter(() => false)(map1)).toEqual(new Map());

    const key1 = Symbol();
    const key2 = Symbol();
    const value1 = Symbol();
    const value2 = Symbol();
    const map2 = new Map([
      [key1, value1],
      [key2, value2],
    ]);
    expect(filter(([k, _]) => k === key1)(map2)).not.toBe(map2);
    expect(filter(([k, _]) => k === key1)(map2)).toEqual(
      new Map([[key1, value1]])
    );
    expect(filter(([_, v]) => v === value2)(map2)).not.toBe(map2);
    expect(filter(([_, v]) => v === value2)(map2)).toEqual(
      new Map([[key2, value2]])
    );
  });

  it('filterKeys', () => {
    const map1 = new Map();
    expect(filterKeys(() => true)(map1)).not.toBe(map1);
    expect(filterKeys(() => true)(map1)).toEqual(new Map());
    expect(filterKeys(() => false)(map1)).not.toBe(map1);
    expect(filterKeys(() => false)(map1)).toEqual(new Map());

    const key1 = Symbol();
    const key2 = Symbol();
    const value1 = Symbol();
    const value2 = Symbol();
    const map2 = new Map([
      [key1, value1],
      [key2, value2],
    ]);
    expect(filterKeys((key) => key === key1)(map2)).not.toBe(map2);
    expect(filterKeys((key) => key === key1)(map2)).toEqual(
      new Map([[key1, value1]])
    );
  });

  it('filterValues', () => {
    const map1 = new Map();
    expect(filterValues(() => true)(map1)).not.toBe(map1);
    expect(filterValues(() => true)(map1)).toEqual(new Map());
    expect(filterValues(() => false)(map1)).not.toBe(map1);
    expect(filterValues(() => false)(map1)).toEqual(new Map());

    const key1 = Symbol();
    const key2 = Symbol();
    const value1 = Symbol();
    const value2 = Symbol();
    const map2 = new Map([
      [key1, value1],
      [key2, value2],
    ]);
    expect(filterValues((value) => value === value2)(map2)).not.toBe(map2);
    expect(filterValues((value) => value === value2)(map2)).toEqual(
      new Map([[key2, value2]])
    );
  });

  it('isEmpty', () => {
    expect(isEmpty(new Map())).toEqual(true);
    expect(isEmpty(new Map([[Symbol(), Symbol()]]))).toEqual(false);
  });

  it('keySet', () => {
    const key = Symbol();
    expect(keySet(new Map())).toEqual(new Set());
    expect(keySet(new Map([[key, Symbol()]]))).toEqual(new Set([key]));
  });

  it('mapValues', () => {
    expect(mapValues(() => true)(new Map())).toEqual(new Map());
    expect(mapValues(() => false)(new Map())).toEqual(new Map());

    const key = Symbol();
    const value = Symbol();
    const map = new Map([[key, value]]);
    expect(mapValues(() => 42)(map)).not.toBe(map);
    expect(mapValues(() => 42)(map)).toEqual(new Map([[key, 42]]));
  });

  it('fromIterable', () => {
    const key = Symbol();
    const value = Symbol();
    expect(fromIterable(() => [key, value])([])).toEqual(new Map());
    expect(fromIterable(() => [key, value])(new Set())).toEqual(new Map());
    expect(fromIterable(() => [key, value])(new Map())).toEqual(new Map());

    expect(fromIterable((e) => [key, e])([0])).toEqual(new Map([[key, 0]]));
    expect(fromIterable((e) => [e, value])([0, 1])).toEqual(
      new Map([
        [0, value],
        [1, value],
      ])
    );
  });
});

export {};
