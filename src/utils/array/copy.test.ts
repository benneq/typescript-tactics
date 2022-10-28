import { copy } from './copy';

describe('array.copy', () => {
  it('should create a new array instance with the same elements', () => {
    const element1 = Symbol();
    const element2 = Symbol();
    const array = [element1, element2];

    const result = copy(array);

    expect(result).not.toBe(array);
    expect(result).toEqual([element1, element2]);
  });

  it('should not modify the given array', () => {
    const element1 = Symbol();
    const element2 = Symbol();
    const array = [element1, element2];

    copy(array);

    expect(array).toEqual([element1, element2]);
  });
});

export {};
