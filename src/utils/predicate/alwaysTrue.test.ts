import { alwaysTrue } from './alwaysTrue';

describe('predicate.alwaysTrue', () => {
  it('alwaysTrue', () => {
    expect(alwaysTrue()).toEqual(true);
  });
});

export {};
