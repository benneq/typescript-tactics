import { alwaysFalse } from '../predicate/alwaysFalse';
import { alwaysTrue } from '../predicate/alwaysTrue';
import { findFirst } from './findFirst';

describe('iterable.findFirst', () => {
  it('should return undefined if the Iterable is empty and no default value is provided', () => {
    expect(findFirst(alwaysTrue)([])).toBeUndefined();
    expect(findFirst(alwaysFalse)([])).toBeUndefined();
  });

  it('should return the default value if the Iterable is empty', () => {
    const defaultValue = Symbol();
    expect(findFirst(alwaysTrue, defaultValue)([])).toBe(defaultValue);
    expect(findFirst(alwaysFalse, defaultValue)([])).toBe(defaultValue);
  });

  it('should return the first element of the iterable matching the Predicate', () => {
    const value1 = Symbol();
    const value2 = Symbol();

    expect(findFirst(alwaysTrue)([value1, Symbol()])).toBe(value1);
    expect(findFirst(alwaysTrue, Symbol())([value1, Symbol()])).toBe(value1);

    expect(findFirst((value) => value === value2)([value1, value2])).toBe(
      value2
    );
  });
});

export {};
