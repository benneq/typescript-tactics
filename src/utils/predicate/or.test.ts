import { alwaysFalse } from './alwaysFalse';
import { alwaysTrue } from './alwaysTrue';
import { or } from './or';

describe('predicate.or', () => {
  it('should return false if no Predicates were provided', () => {
    expect(or()(Symbol())).toBe(false);
  });

  it('should return true if any Predicate returns true', () => {
    expect(or(alwaysTrue)(Symbol())).toBe(true);
    expect(or(alwaysTrue, alwaysTrue)(Symbol())).toBe(true);
    expect(or(alwaysTrue, alwaysFalse)(Symbol())).toBe(true);
    expect(or(alwaysFalse, alwaysTrue)(Symbol())).toBe(true);
  });

  it('should return false if all Predicates return false', () => {
    expect(or(alwaysFalse)(Symbol())).toEqual(false);
    expect(or(alwaysFalse, alwaysFalse)(Symbol())).toBe(false);
  });
});

export {};
