import { filterKeys } from './filterKeys';

describe('map.filterKeys', () => {
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
});

export {};
