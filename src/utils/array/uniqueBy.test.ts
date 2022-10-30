import { identity } from '../func';
import { alwaysFalse } from '../predicate/alwaysFalse';
import { alwaysTrue } from '../predicate/alwaysTrue';
import { uniqueBy } from './uniqueBy';

describe('array.uniqueBy', () => {
  it('should return an empty Array if provided Array is empty', () => {
    expect(uniqueBy([], alwaysTrue)).toEqual([]);
    expect(uniqueBy([], alwaysFalse)).toEqual([]);
  });

  it('should return no duplicate elements according to keyProvider', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const value3 = Symbol();
    const array = [value1, value1, value2, value3, value2];

    expect(uniqueBy(array, identity)).toEqual([value1, value2, value3]);
  });
});

export {};
