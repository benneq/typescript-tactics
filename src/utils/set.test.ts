import { every, isEmpty, some } from './iterable';
import { isSet, toggle, toSet } from './set';

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
