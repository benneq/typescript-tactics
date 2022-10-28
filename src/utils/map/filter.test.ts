import { alwaysFalse } from '../predicate/alwaysFalse';
import { alwaysTrue } from '../predicate/alwaysTrue';
import { filter } from './filter';

describe('map.filter', () => {
  it('should return a new Map', () => {
    const map = new Map();

    expect(filter(alwaysTrue)(map)).not.toBe(map);
    expect(filter(alwaysTrue)(map)).toEqual(new Map());
    expect(filter(alwaysFalse)(map)).not.toBe(map);
    expect(filter(alwaysFalse)(map)).toEqual(new Map());
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

    expect(filter(([k, _]) => k === key1)(map)).not.toBe(map);
    expect(filter(([k, _]) => k === key1)(map)).toEqual(
      new Map([[key1, value1]])
    );
    expect(filter(([_, v]) => v === value2)(map)).not.toBe(map);
    expect(filter(([_, v]) => v === value2)(map)).toEqual(
      new Map([[key2, value2]])
    );
  });
});

export {};
