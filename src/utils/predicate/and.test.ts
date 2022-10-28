import { alwaysFalse } from './alwaysFalse';
import { alwaysTrue } from './alwaysTrue';
import { and } from './and';

describe('predicate.and', () => {
  it('should return true if no Predicates were provided', () => {
    expect(and()(Symbol())).toBe(true);
  });

  it('should return true if all given Predicates return true', () => {
    expect(and(alwaysTrue)(Symbol())).toBe(true);
    expect(and(alwaysTrue, alwaysTrue)(Symbol())).toBe(true);
  });

  it('should return false if any Predicate returns false', () => {
    expect(and(alwaysFalse)(Symbol())).toBe(false);
    expect(and(alwaysTrue, alwaysFalse)(Symbol())).toBe(false);
    expect(and(alwaysFalse, alwaysTrue)(Symbol())).toBe(false);
    expect(and(alwaysFalse, alwaysFalse)(Symbol())).toBe(false);
  });
});

export {};
