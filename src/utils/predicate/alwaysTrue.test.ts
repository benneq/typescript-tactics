import { alwaysTrue } from './alwaysTrue';

describe('predicate.alwaysTrue', () => {
  it('should return always true', () => {
    expect(alwaysTrue()).toBe(true);
  });
});

export {};
