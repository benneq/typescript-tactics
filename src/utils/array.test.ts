import {
  equal,
  inArray,
  insertAt,
  isArray,
  move,
  nth,
  removeAt,
  swap,
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

  it('equal', () => {
    expect(equal([])([])).toEqual(true);
    expect(equal<number>([])([0])).toEqual(false);
    expect(equal([0])([])).toEqual(false);
    expect(equal([1, 2])([1, 2])).toEqual(true);
    expect(equal([1, 2])([2, 1])).toEqual(false);
  });

  it('nth', () => {
    expect(nth([])).toEqual(undefined);
    expect(nth([0])).toEqual(0);
    expect(nth([0, 1])).toEqual(0);

    expect(nth([], 1)).toEqual(undefined);
    expect(nth([0], 1)).toEqual(undefined);
    expect(nth([0, 1], 1)).toEqual(1);
  });

  it('inArray', () => {
    expect(inArray([])(0)).toEqual(false);
    expect(inArray([])(1)).toEqual(false);

    expect(inArray([1, 2, 3])(-1)).toEqual(false);
    expect(inArray([1, 2, 3])(0)).toEqual(true);
    expect(inArray([1, 2, 3])(1)).toEqual(true);
    expect(inArray([1, 2, 3])(2)).toEqual(true);
    expect(inArray([1, 2, 3])(3)).toEqual(false);
  });

  describe('mutations', () => {
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
});

export {};
