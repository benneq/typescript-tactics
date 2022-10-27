import { isEmpty } from './isEmpty';

describe('set.isEmpty', () => {
  it('isEmpty', () => {
    expect(isEmpty(new Set())).toEqual(true);
    expect(isEmpty(new Set([Symbol()]))).toEqual(false);
  });
});

export {};
