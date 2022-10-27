import { alwaysFalse } from './alwaysFalse';

describe('predicate.alwaysFalse', () => {
  it('alwaysFalse', () => {
    expect(alwaysFalse()).toEqual(false);
  });
});

export {};
