import { isEmpty } from './isEmpty';

describe('set.isEmpty', () => {
  it('should return true if the Set has no elements', () => {
    expect(isEmpty(new Set())).toBe(true);
  });

  it('should return false if the Set has elements', () => {
    expect(isEmpty(new Set([Symbol(), Symbol()]))).toBe(false);
  });
});

export {};
