import { alwaysFalse } from '../predicate/alwaysFalse';
import { alwaysTrue } from '../predicate/alwaysTrue';
import { filterKeys } from './filterKeys';

describe('map.filterKeys', () => {
  it('should return a new Map', () => {
    const map = new Map();

    expect(filterKeys(alwaysTrue)(map)).not.toBe(map);
    expect(filterKeys(alwaysTrue)(map)).toEqual(new Map());
    expect(filterKeys(alwaysFalse)(map)).not.toBe(map);
    expect(filterKeys(alwaysFalse)(map)).toEqual(new Map());
  });

  it('should only keep entries matching the Predicate', () => {
    const key1 = Symbol();
    const key2 = Symbol();
    const value1 = Symbol();
    const value2 = Symbol();
    const map = new Map([
      [key1, value1],
      [key2, value2],
    ]);

    expect(filterKeys((key) => key === key1)(map)).not.toBe(map);
    expect(filterKeys((key) => key === key1)(map)).toEqual(
      new Map([[key1, value1]])
    );
  });
});

export {};
