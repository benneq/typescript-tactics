import { removeAt } from './removeAt';

describe('array.removeAt', () => {
  it('should remove the Array element at the given index', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const array = [value1, value2];

    removeAt(array, 1);

    expect(array).toEqual([value1]);
  });

  it('should not modify the Array if it is empty', () => {
    const array: unknown[] = [];

    removeAt(array, 1);

    expect(array).toEqual([]);
  });

  it('should remove the Array element from the end if the given index is negative', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const array = [value1, value2];

    removeAt(array, -2);

    expect(array).toEqual([value2]);
  });

  it('should not modify the Array if index is out of bounds', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const array = [value1, value2];

    removeAt(array, 2);

    expect(array).toEqual([value1, value2]);
  });

  it('should not modify the Array if deleteCount <= 0', () => {
    const value = Symbol();
    const array = [value];

    removeAt(array, 0, 0);

    expect(array).toEqual([value]);

    removeAt(array, 0, -1);

    expect(array).toEqual([value]);
  });

  it('should remove multiple elements if deleteCount > 1', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const value3 = Symbol();
    const array = [value1, value2, value3];

    removeAt(array, 1, 2);

    expect(array).toEqual([value1]);
  });
});

export {};
