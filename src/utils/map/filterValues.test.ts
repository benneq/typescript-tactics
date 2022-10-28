import { filterValues } from './filterValues';

describe('map.filterValues', () => {
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
});

export {};
