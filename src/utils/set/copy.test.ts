import { copy } from './copy';

describe('set.copy', () => {
  it('should return a new Set', () => {
    const set = new Set();

    const result = copy(set);

    expect(result).toEqual(new Set());
    expect(result).not.toBe(set);
  });

  it('should copy all elements', () => {
    const value = Symbol();
    const set = new Set([value]);

    const result = copy(set);

    expect(result).toEqual(new Set([value]));
    expect(result).not.toBe(set);
  });
});

export {};
