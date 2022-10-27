import { copy } from './copy';

describe('array.copy', () => {
  it('copy', () => {
    const value = Symbol();
    const array = [value];
    expect(copy(array)).not.toBe(array);
    expect(copy(array)).toEqual([value]);
  });
});

export {};
