import { alwaysFalse } from './alwaysFalse';

describe('predicate.alwaysFalse', () => {
  it('should return always false', () => {
    expect(alwaysFalse()).toBe(false);
  });
});

export {};
