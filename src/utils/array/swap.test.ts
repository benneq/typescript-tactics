import { swap } from './swap';

describe('array.swap', () => {
  it('swap', () => {
    const array1: unknown[] = [];

    swap(array1, 0, 0);
    expect(array1).toEqual([]);

    swap(array1, -1, 0);
    expect(array1).toEqual([]);

    swap(array1, 0, -1);
    expect(array1).toEqual([]);

    const value1 = Symbol();
    const value2 = Symbol();
    const array2 = [value1, value2];

    swap(array2, 0, 0);
    expect(array2).toEqual([value1, value2]);

    swap(array2, 0, 1);
    expect(array2).toEqual([value2, value1]);

    swap(array2, 1, 0);
    expect(array2).toEqual([value1, value2]);

    swap(array2, 0, 2);
    expect(array2).toEqual([value1, value2]);

    swap(array2, 2, 0);
    expect(array2).toEqual([value1, value2]);

    swap(array2, 0, -1);
    expect(array2).toEqual([value1, value2]);

    swap(array2, -1, 0);
    expect(array2).toEqual([value1, value2]);
  });
});

export {};
