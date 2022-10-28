import { swap } from './swap';

describe('array.swap', () => {
  it('should swap the Array elements at the given indexes', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const value3 = Symbol();
    const array = [value1, value2, value3];

    swap(array, 1, 2);

    expect(array).toEqual([value1, value3, value2]);
  });

  it('should not modify the Array if it is empty', () => {
    const array: unknown[] = [];

    swap(array, 0, 0);

    expect(array).toEqual([]);
  });

  it('should not modify the Array if the given indexes are equal', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const value3 = Symbol();
    const array = [value1, value2, value3];

    swap(array, 1, 1);

    expect(array).toEqual([value1, value2, value3]);
  });

  it('should not modify the Array if any index is out of bounds', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const array = [value1, value2];

    swap(array, -1, 0);
    expect(array).toEqual([value1, value2]);

    swap(array, 0, -1);
    expect(array).toEqual([value1, value2]);

    swap(array, 3, 5);
    expect(array).toEqual([value1, value2]);
  });
});

export {};
