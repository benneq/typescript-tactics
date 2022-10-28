import { filter } from './filter';

describe('map.filter', () => {
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
});

export {};
