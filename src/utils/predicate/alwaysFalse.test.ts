import { alwaysFalse } from './alwaysFalse';

describe('predicate.alwaysFalse', () => {
  it('should return always false', () => {
    expect(alwaysFalse()).toBe(false);
  });

  it('should accept any argument', () => {
    expect(alwaysFalse('', 1, Symbol(), null)).toBe(false);
  });
});

export {};
