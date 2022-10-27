import { removeAt } from './removeAt';

describe('array.removeAt', () => {
  it('removeAt', () => {
    const array1: unknown[] = [];
    removeAt(array1, 0);
    expect(array1).toEqual([]);

    removeAt(array1, 1);
    expect(array1).toEqual([]);

    const value1 = Symbol();
    const value2 = Symbol();
    const array2 = [value1, value2];
    removeAt(array2, 0);
    expect(array2).toEqual([value2]);
  });
});

export {};
