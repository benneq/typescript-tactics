import {
  concat,
  dropWhile,
  every,
  filter,
  first,
  flatMap,
  forEach,
  isEmpty,
  isIterable,
  limit,
  map,
  skip,
  some,
  takeWhile,
  toArray,
  toIterable,
} from './iterable';

describe('iterable', () => {
  it('isIterable', () => {
    expect(isIterable(undefined)).toEqual(false);
    expect(isIterable(null)).toEqual(false);
    expect(isIterable(NaN)).toEqual(false);
    expect(isIterable(0)).toEqual(false);
    expect(isIterable(true)).toEqual(false);
    expect(isIterable(Symbol())).toEqual(false);
    expect(isIterable({})).toEqual(false);
    expect(isIterable('')).toEqual(true);
    expect(isIterable([])).toEqual(true);
    expect(isIterable(new Set())).toEqual(true);
    expect(isIterable(new Map())).toEqual(true);
    expect(isIterable(jest.fn())).toEqual(false);
  });

  it('toIterable', () => {
    const value = Symbol();
    expect(toIterable(null)).toEqual([null]);
    expect(toIterable({})).toEqual([{}]);
    expect(toIterable(value)).toEqual([value]);
    expect(toIterable('')).toEqual('');
    expect(toIterable([])).toEqual([]);
    expect(toIterable(new Set())).toEqual(new Set());
    expect(toIterable(new Map())).toEqual(new Map());

    expect(toIterable([value])).toEqual([value]);
    expect(toIterable(new Set([value]))).toEqual(new Set([value]));
    expect(toIterable(new Map([[value, value]]))).toEqual(
      new Map([[value, value]])
    );
  });

  it('first', () => {
    expect(first([])).toEqual(undefined);

    const defaultValue = Symbol();
    expect(first([], defaultValue)).toEqual(defaultValue);

    const value = Symbol();
    expect(first([value, Symbol()])).toEqual(value);
    expect(first([value, Symbol()], defaultValue)).toEqual(value);
  });

  it('forEach', () => {
    const value = Symbol();
    const callback = jest.fn();

    forEach([value, value])(callback);
    expect(callback).toHaveBeenNthCalledWith(1, value);
    expect(callback).toHaveBeenNthCalledWith(2, value);
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('filter', () => {
    const generator = filter((value: number) => value > 3)([2, 3, 4, 5]);
    expect(generator.next().value).toEqual(4);
    expect(generator.next().value).toEqual(5);
    expect(generator.next().done).toEqual(true);
  });

  it('dropWhile', () => {
    const generator = dropWhile((value: number) => value < 3)([2, 3, 4, 5]);
    expect(generator.next().value).toEqual(3);
    expect(generator.next().value).toEqual(4);
    expect(generator.next().value).toEqual(5);
    expect(generator.next().done).toEqual(true);
  });

  it('takeWhile', () => {
    const generator = takeWhile((value: number) => value < 3)([0, 1, 2]);
    expect(generator.next().value).toEqual(0);
    expect(generator.next().value).toEqual(1);
    expect(generator.next().value).toEqual(2);
    expect(generator.next().done).toEqual(true);
  });

  it('limit', () => {
    const generator = limit(3)([0, 1, 2, 3]);
    expect(generator.next().value).toEqual(0);
    expect(generator.next().value).toEqual(1);
    expect(generator.next().value).toEqual(2);
    expect(generator.next().done).toEqual(true);
  });

  it('skip', () => {
    const generator = skip(3)([0, 1, 2, 3, 4]);
    expect(generator.next().value).toEqual(3);
    expect(generator.next().value).toEqual(4);
    expect(generator.next().done).toEqual(true);
  });

  it('map', () => {
    const generator = map((value) => String(value))([0, 1, 2]);
    expect(generator.next().value).toEqual('0');
    expect(generator.next().value).toEqual('1');
    expect(generator.next().value).toEqual('2');
    expect(generator.next().done).toEqual(true);
  });

  it('flatMap', () => {
    function* innerIterable(value: number) {
      yield value;
      yield value * 2;
    }

    const generator = flatMap((value: number) => innerIterable(value))([
      0, 1, 2,
    ]);
    expect(generator.next().value).toEqual(0);
    expect(generator.next().value).toEqual(0);
    expect(generator.next().value).toEqual(1);
    expect(generator.next().value).toEqual(2);
    expect(generator.next().value).toEqual(2);
    expect(generator.next().value).toEqual(4);
    expect(generator.next().done).toEqual(true);
  });

  it('concat', () => {
    const generator = concat([
      [2, 1],
      [3, 4],
    ]);
    expect(generator.next().value).toEqual(2);
    expect(generator.next().value).toEqual(1);
    expect(generator.next().value).toEqual(3);
    expect(generator.next().value).toEqual(4);
    expect(generator.next().done).toEqual(true);
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

  it('toArray', () => {
    const iterable = {
      i: 0,
      [Symbol.iterator]: () => ({
        next: () => {
          iterable.i++;
          return {
            value: iterable.i,
            done: iterable.i >= 3,
          };
        },
      }),
    };
    expect(toArray(iterable)).toEqual([1, 2]);
  });
});

export {};
