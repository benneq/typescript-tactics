import { move } from './move';

describe('array.move', () => {
  it('should an element from indexA to indexB', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const value3 = Symbol();
    const array = [value1, value2, value3];

    move(array, 1, 2);
    expect(array).toEqual([value1, value3, value2]);
  });

  it('should not modify the Array if both indexes are equal', () => {
    const value1 = 1;
    const value2 = 2;
    const value3 = Symbol();
    const array = [value1, value2, value3];

    move(array, 1, 1);
    expect(array).toEqual([value1, value2, value3]);
  });

  it('move', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const array2 = [value1, value2];

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
