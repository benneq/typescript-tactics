import { isEmpty } from './isEmpty';

describe('iterable.isEmpty', () => {
  it('should return true if the Iterable has no elements', () => {
    expect(isEmpty('')).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
    expect(isEmpty(new Map())).toBe(true);
  });

  it('should return false if the Iterable has elements', () => {
    expect(isEmpty('a')).toBe(false);
    expect(isEmpty([Symbol()])).toBe(false);
    expect(isEmpty(new Set([Symbol()]))).toBe(false);
    expect(isEmpty(new Map([[Symbol(), Symbol()]]))).toBe(false);
  });
});

export {};
