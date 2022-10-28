import { alwaysFalse } from '../predicate/alwaysFalse';
import { alwaysTrue } from '../predicate/alwaysTrue';
import { mapValues } from './mapValues';

describe('map.mapValues', () => {
  it('it should return a new Map', () => {
    const map = new Map();

    expect(mapValues(alwaysTrue)(map)).not.toBe(map);
    expect(mapValues(alwaysTrue)(map)).toEqual(new Map());
    expect(mapValues(alwaysFalse)(map)).not.toBe(map);
    expect(mapValues(alwaysFalse)(map)).toEqual(new Map());
  });

  it('it should return a new Map containing the same keys but with their mapped values', () => {
    const key = Symbol();
    const value = Symbol();
    const mappedValue = Symbol();
    const map = new Map([[key, value]]);

    expect(mapValues(() => mappedValue)(map)).not.toBe(map);
    expect(mapValues(() => mappedValue)(map)).toEqual(
      new Map([[key, mappedValue]])
    );
  });
});

export {};
