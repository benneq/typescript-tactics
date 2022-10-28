import { alwaysTrue } from './alwaysTrue';

describe('predicate.alwaysTrue', () => {
  it('should return always true', () => {
    expect(alwaysTrue()).toBe(true);
  });

  it('should accept any argument', () => {
    expect(alwaysTrue('', 1, Symbol(), null)).toBe(true);
  });
});

export {};
