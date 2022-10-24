import {
  insertAtIndex,
  isArray,
  moveIndex,
  nth,
  swapIndex,
  toArray,
} from './array';

describe('array', () => {
  it('isArray', () => {
    expect(isArray(undefined)).toEqual(false);
    expect(isArray(null)).toEqual(false);
    expect(isArray(NaN)).toEqual(false);
    expect(isArray(0)).toEqual(false);
    expect(isArray(true)).toEqual(false);
    expect(isArray({})).toEqual(false);
    expect(isArray('')).toEqual(false);
    expect(isArray([])).toEqual(true);
    expect(isArray(new Set())).toEqual(false);
    expect(isArray(new Map())).toEqual(false);
    expect(isArray(jest.fn())).toEqual(false);
  });

  it('toArray', () => {
    expect(toArray(undefined)).toEqual([undefined]);
    expect(toArray(null)).toEqual([null]);
    expect(toArray(NaN)).toEqual([NaN]);
    expect(toArray(0)).toEqual([0]);
    expect(toArray(true)).toEqual([true]);
    expect(toArray({})).toEqual([{}]);
    expect(toArray('')).toEqual(['']);
    expect(toArray([])).toEqual([]);
    expect(toArray(new Set())).toEqual([]);
    expect(toArray(new Map())).toEqual([new Map()]);
  });

  it('nth', () => {
    expect(nth([])).toEqual(undefined);
    expect(nth([0])).toEqual(0);
    expect(nth([0, 1])).toEqual(0);

    expect(nth([], 1)).toEqual(undefined);
    expect(nth([0], 1)).toEqual(undefined);
    expect(nth([0, 1], 1)).toEqual(1);
  });

  describe('mutations', () => {
    it('insertAtIndex', () => {
      const array1: unknown[] = [];
      insertAtIndex(array1, 0);
      expect(array1).toEqual([]);

      insertAtIndex(array1, 1);
      expect(array1).toEqual([]);

      const value1 = Symbol();
      const value2 = Symbol();
      insertAtIndex(array1, 0, value1, value2);
      expect(array1).toEqual([value1, value2]);
    });

    it('moveIndex', () => {
      const array1: unknown[] = [];

      moveIndex(array1, 0, 0);
      expect(array1).toEqual([]);

      moveIndex(array1, 1, 1);
      expect(array1).toEqual([]);

      const value1 = Symbol();
      const value2 = Symbol();
      const array2 = [value1, value2];

      moveIndex(array2, 0, 0);
      expect(array2).toEqual([value1, value2]);

      moveIndex(array2, 0, 1);
      expect(array2).toEqual([value2, value1]);

      moveIndex(array2, 1, 0);
      expect(array2).toEqual([value1, value2]);

      moveIndex(array2, -1, 3);
      expect(array2).toEqual([value1, value2]);

      moveIndex(array2, 1, -1);
      expect(array2).toEqual([value2, value1]);

      moveIndex(array2, 1, -2);
      expect(array2).toEqual([value1, value2]);

      moveIndex(array2, -1, 0);
      expect(array2).toEqual([value2, value1]);

      moveIndex(array2, 2, 0);
      expect(array2).toEqual([value2, value1]);
    });

    it('swapIndex', () => {
      const array1: unknown[] = [];

      swapIndex(array1, 0, 0);
      expect(array1).toEqual([]);

      swapIndex(array1, -1, 0);
      expect(array1).toEqual([]);

      swapIndex(array1, 0, -1);
      expect(array1).toEqual([]);

      const value1 = Symbol();
      const value2 = Symbol();
      const array2 = [value1, value2];

      swapIndex(array2, 0, 0);
      expect(array2).toEqual([value1, value2]);

      swapIndex(array2, 0, 1);
      expect(array2).toEqual([value2, value1]);

      swapIndex(array2, 1, 0);
      expect(array2).toEqual([value1, value2]);

      swapIndex(array2, 0, 2);
      expect(array2).toEqual([value1, value2]);

      swapIndex(array2, 2, 0);
      expect(array2).toEqual([value1, value2]);

      swapIndex(array2, 0, -1);
      expect(array2).toEqual([value1, value2]);

      swapIndex(array2, -1, 0);
      expect(array2).toEqual([value1, value2]);
    });
  });
});

export {};
