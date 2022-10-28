import { alwaysFalse } from './alwaysFalse';
import { alwaysTrue } from './alwaysTrue';
import { not } from './not';

describe('predicate.not', () => {
  it('should return true if the given Predicate returns false', () => {
    expect(not(alwaysFalse)(Symbol())).toBe(true);
  });

  it('should return false if the given Predicate returns true', () => {
    expect(not(alwaysTrue)(Symbol())).toBe(false);
  });
});

export {};
