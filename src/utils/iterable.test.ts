import {
  every,
  forEach,
  isEmpty,
  isIterable,
  some,
  toIterable,
} from './iterable';

describe('iterable', () => {
  it('isIterable', () => {
    expect(isIterable(undefined)).toEqual(false);
    expect(isIterable(null)).toEqual(false);
    expect(isIterable(NaN)).toEqual(false);
    expect(isIterable(0)).toEqual(false);
    expect(isIterable(true)).toEqual(false);
    expect(isIterable({})).toEqual(false);
    expect(isIterable('')).toEqual(true);
    expect(isIterable([])).toEqual(true);
    expect(isIterable(new Set())).toEqual(true);
    expect(isIterable(new Map())).toEqual(true);
  });

  it('toIterable', () => {
    expect(toIterable(null)).toEqual([null]);
    expect(toIterable({})).toEqual([{}]);
    expect(toIterable('')).toEqual('');
    expect(toIterable([])).toEqual([]);
    expect(toIterable(new Set())).toEqual(new Set());
    expect(toIterable(new Map())).toEqual(new Map());

    const value = Symbol();
    expect(toIterable([value])).toEqual([value]);
    expect(toIterable(new Set([value]))).toEqual(new Set([value]));
    expect(toIterable(new Map([[value, value]]))).toEqual(
      new Map([[value, value]])
    );
  });

  it('forEach', () => {
    const value = Symbol();
    const callback = jest.fn();

    forEach([value])(callback);
    expect(callback).toHaveBeenNthCalledWith(1, value);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('every', () => {
    expect(every([])(() => true)).toEqual(true);
    expect(every([])(() => false)).toEqual(true);

    const value = Symbol();
    const predicate = jest.fn((val) => val === value);
    expect(every([value])(predicate)).toEqual(true);
    expect(every([Symbol()])(predicate)).toEqual(false);
    expect(every([value, Symbol()])(predicate)).toEqual(false);
  });

  it('some', () => {
    expect(some([])(() => true)).toEqual(false);
    expect(some([])(() => false)).toEqual(false);

    const value = Symbol();
    const predicate = jest.fn((val) => val === value);
    expect(some([value])(predicate)).toEqual(true);
    expect(some([Symbol()])(predicate)).toEqual(false);
    expect(some([value, Symbol()])(predicate)).toEqual(true);
  });

  it('isEmpty', () => {
    expect(isEmpty('')).toEqual(true);
    expect(isEmpty([])).toEqual(true);
    expect(isEmpty(new Set())).toEqual(true);
    expect(isEmpty(new Map())).toEqual(true);

    expect(isEmpty('a')).toEqual(false);
    expect(isEmpty([Symbol()])).toEqual(false);
    expect(isEmpty(new Set([Symbol()]))).toEqual(false);
    expect(isEmpty(new Map([[Symbol(), Symbol()]]))).toEqual(false);
  });
});

export {};
