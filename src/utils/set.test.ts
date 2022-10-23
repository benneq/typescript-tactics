import {
  contains,
  containsAll,
  containsAny,
  isEmpty,
  isSet,
  toggle,
  toggleAll,
  toSet,
} from './set';

describe('set', () => {
  it('isSet', () => {
    expect(isSet(undefined)).toEqual(false);
    expect(isSet(null)).toEqual(false);
    expect(isSet(NaN)).toEqual(false);
    expect(isSet(0)).toEqual(false);
    expect(isSet(true)).toEqual(false);
    expect(isSet({})).toEqual(false);
    expect(isSet('')).toEqual(false);
    expect(isSet([])).toEqual(false);
    expect(isSet(new Set())).toEqual(true);
    expect(isSet(new Map())).toEqual(false);
    expect(isSet(jest.fn())).toEqual(false);
  });

  it('toSet', () => {
    expect(toSet(null)).toEqual(new Set([null]));
    expect(toSet({})).toEqual(new Set([{}]));
    expect(toSet('')).toEqual(new Set(['']));
    expect(toSet([])).toEqual(new Set());
    expect(toSet(new Set())).toEqual(new Set());
    expect(toSet(new Map())).toEqual(new Set([new Map()]));

    const value = Symbol();
    expect(toSet([value])).toEqual(new Set([value]));
    expect(toSet(new Set([value]))).toEqual(new Set([value]));
    expect(toSet(new Map([[value, value]]))).toEqual(
      new Set([new Map([[value, value]])])
    );
  });

  it('toggle', () => {
    const value = Symbol();
    const set1 = new Set();
    toggle(set1)(value);
    expect(set1).toEqual(new Set([value]));

    const set2 = new Set([value]);
    toggle(set2)(value);
    expect(set2).toEqual(new Set());
  });

  it('toggleAll', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const set1 = new Set();
    toggleAll(set1)([]);
    expect(set1).toEqual(new Set());

    toggleAll(set1)([value1]);
    expect(set1).toEqual(new Set([value1]));

    toggleAll(set1)([value2]);
    expect(set1).toEqual(new Set([value1, value2]));

    toggleAll(set1)([value2, value1]);
    expect(set1).toEqual(new Set());
  });

  it('isEmpty', () => {
    expect(isEmpty(new Set())).toEqual(true);
    expect(isEmpty(new Set([Symbol()]))).toEqual(false);
  });

  it('contains', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    expect(contains(new Set())(value1)).toEqual(false);
    expect(contains(new Set([value1]))(value2)).toEqual(false);
    expect(contains(new Set([value1]))(value1)).toEqual(true);
  });

  it('containsAll', () => {
    const value1 = Symbol();
    const value2 = Symbol();

    expect(containsAll(new Set())([])).toEqual(true);
    expect(containsAll(new Set())(new Set())).toEqual(true);
    expect(containsAll(new Set())([value1])).toEqual(false);
    expect(containsAll(new Set())(new Set([value1]))).toEqual(false);
    expect(containsAll(new Set([value1]))([])).toEqual(true);
    expect(containsAll(new Set([value1]))(new Set())).toEqual(true);
    expect(containsAll(new Set([value1]))([value1])).toEqual(true);
    expect(containsAll(new Set([value1]))(new Set([value1]))).toEqual(true);
    expect(containsAll(new Set([value1]))([value2])).toEqual(false);
    expect(containsAll(new Set([value1]))(new Set([value2]))).toEqual(false);

    expect(containsAll(new Set([value1, value2]))(new Set([value1]))).toEqual(
      true
    );
    expect(containsAll(new Set([value1, value2]))(new Set([value2]))).toEqual(
      true
    );
    expect(
      containsAll(new Set([value1, value2]))(new Set([value2, value1]))
    ).toEqual(true);
  });

  it('containsAll', () => {
    const value1 = Symbol();
    const value2 = Symbol();

    expect(containsAny(new Set())([])).toEqual(false);
    expect(containsAny(new Set())(new Set())).toEqual(false);
    expect(containsAny(new Set())([value1])).toEqual(false);
    expect(containsAny(new Set())(new Set([value1]))).toEqual(false);
    expect(containsAny(new Set([value1]))([])).toEqual(false);
    expect(containsAny(new Set([value1]))(new Set())).toEqual(false);
    expect(containsAny(new Set([value1]))([value1])).toEqual(true);
    expect(containsAny(new Set([value1]))(new Set([value1]))).toEqual(true);
    expect(containsAny(new Set([value1]))([value2])).toEqual(false);
    expect(containsAny(new Set([value1]))(new Set([value2]))).toEqual(false);
    expect(containsAny(new Set([value1]))([value2, value1])).toEqual(true);
    expect(containsAny(new Set([value1]))(new Set([value2, value1]))).toEqual(
      true
    );

    expect(containsAny(new Set([value1, value2]))(new Set([value1]))).toEqual(
      true
    );
    expect(containsAny(new Set([value1, value2]))(new Set([value2]))).toEqual(
      true
    );
    expect(
      containsAny(new Set([value1, value2]))(new Set([value2, value1]))
    ).toEqual(true);
  });
});

export {};
