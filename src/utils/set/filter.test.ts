import { alwaysFalse } from '../predicate/alwaysFalse';
import { alwaysTrue } from '../predicate/alwaysTrue';
import { filter } from './filter';

describe('set.filter', () => {
  it('should return a new Set if the given Set was empty', () => {
    const set = new Set();

    expect(filter(set)(alwaysTrue)).not.toBe(set);
    expect(filter(set)(alwaysTrue)).toEqual(new Set());

    expect(filter(set)(alwaysFalse)).not.toBe(set);
    expect(filter(set)(alwaysFalse)).toEqual(new Set());
  });

  it('should return a new Set with only the elements from the given Set that match the Predicate', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const value3 = Symbol();
    const set = new Set([value1, value2, value3]);

    expect(filter(set)((e) => e === value2)).not.toBe(set);
    expect(filter(set)((e) => e === value2)).toEqual(new Set([value2]));

    expect(filter(set)((e) => e !== value2)).not.toBe(set);
    expect(filter(set)((e) => e !== value2)).toEqual(new Set([value1, value3]));
  });
});

export {};
