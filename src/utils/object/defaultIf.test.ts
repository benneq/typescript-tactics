import { alwaysFalse } from '../predicate/alwaysFalse';
import { alwaysTrue } from '../predicate/alwaysTrue';
import { defaultIf } from './defaultIf';

describe('object.defaultIf', () => {
  it('should return the default value if Predicate returns true', () => {
    const defaultValue = Symbol();

    expect(defaultIf(alwaysTrue)(defaultValue)(Symbol())).toBe(defaultValue);
    expect(defaultIf(alwaysTrue)(() => defaultValue)(Symbol())).toBe(
      defaultValue
    );
  });

  it('should return the provided value if Predicate returns false', () => {
    const value = Symbol();

    expect(defaultIf(alwaysFalse)(Symbol())(value)).toBe(value);
  });
});

export {};
