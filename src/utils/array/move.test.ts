import { move } from './move';

describe('array.move', () => {
  it('move', () => {
    const array1: unknown[] = [];

    move(array1, 0, 0);
    expect(array1).toEqual([]);

    move(array1, 1, 1);
    expect(array1).toEqual([]);

    const value1 = Symbol();
    const value2 = Symbol();
    const array2 = [value1, value2];

    move(array2, 0, 0);
    expect(array2).toEqual([value1, value2]);

    move(array2, 0, 1);
    expect(array2).toEqual([value2, value1]);

    move(array2, 1, 0);
    expect(array2).toEqual([value1, value2]);

    move(array2, -1, 3);
    expect(array2).toEqual([value1, value2]);

    move(array2, 1, -1);
    expect(array2).toEqual([value2, value1]);

    move(array2, 1, -2);
    expect(array2).toEqual([value1, value2]);

    move(array2, -1, 0);
    expect(array2).toEqual([value2, value1]);

    move(array2, 2, 0);
    expect(array2).toEqual([value2, value1]);
  });
});

export {};
