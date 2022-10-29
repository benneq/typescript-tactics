import { isEmpty } from './isEmpty';

describe('set.isEmpty', () => {
  it('should return true if the Set has no elements', () => {
    expect(isEmpty(new Set())).toEqual(true);
  });

  it('should return false if the Set has elements', () => {
    expect(isEmpty(new Set([Symbol(), Symbol()]))).toEqual(false);
  });
});

export {};
