import { normalizeIndex } from './normalizeIndex';

describe('array.normalizeIndex', () => {
  it('should return a positive Number between 0 and Array length', () => {
    expect(normalizeIndex(0)([1, 2, 3])).toBe(0);
    expect(normalizeIndex(1)([1, 2, 3])).toBe(1);
    expect(normalizeIndex(-1)([1, 2, 3])).toBe(2);
    expect(normalizeIndex(4)([1, 2, 3])).toBe(1);
  });
});

export {};
