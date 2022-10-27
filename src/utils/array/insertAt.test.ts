import { insertAt } from './insertAt';

describe('array.insertAt', () => {
  it('insertAt', () => {
    const array1: unknown[] = [];
    insertAt(array1, 0);
    expect(array1).toEqual([]);

    insertAt(array1, 1);
    expect(array1).toEqual([]);

    const value1 = Symbol();
    const value2 = Symbol();
    insertAt(array1, 0, value1, value2);
    expect(array1).toEqual([value1, value2]);
  });
});

export {};
