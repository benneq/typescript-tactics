import { isEmpty } from './isEmpty';

describe('range.isEmpty', () => {
  it('should return true if the given Range is empty', () => {
    expect(isEmpty([1, 1])).toBe(true);
  });

  it('should return false if the given Range is not empty', () => {
    expect(isEmpty([1, 2])).toBe(false);
  });
});

export {};
