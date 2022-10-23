import {
  addAll,
  contains,
  containsAll,
  containsAny,
  removeAll,
  isEmpty,
  isSet,
  toggle,
  toggleAll,
  toSet,
  add,
  remove,
  copy,
  filter,
  isSuperset,
  union,
  intersection,
  difference,
  symmetricDifference,
  isSubset,
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

  it('copy', () => {
    const set1 = new Set();
    const res1 = copy(set1);
    expect(res1).toEqual(new Set());
    expect(res1).not.toBe(set1);

    const value = Symbol();
    const set2 = new Set([value]);
    const res2 = copy(set2);
    expect(res2).toEqual(new Set([value]));
    expect(res2).not.toBe(set2);
  });

  it('filter', () => {
    expect(filter(new Set())(() => true)).toEqual(new Set());
    expect(filter(new Set())(() => false)).toEqual(new Set());

    const value1 = Symbol();
    const value2 = Symbol();
    const value3 = Symbol();
    expect(
      filter(new Set([value1, value2, value3]))((e) => e === value2)
    ).toEqual(new Set([value2]));
    expect(
      filter(new Set([value1, value2, value3]))((e) => e !== value2)
    ).toEqual(new Set([value1, value3]));
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

  it('isSuperset', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    expect(isSuperset(new Set(), new Set())).toEqual(true);
    expect(isSuperset(new Set([value1]), new Set())).toEqual(true);
    expect(isSuperset(new Set(), new Set([value1]))).toEqual(false);
    expect(isSuperset(new Set([value1]), new Set([value1]))).toEqual(true);

    expect(isSuperset(new Set([value1]), new Set([value2]))).toEqual(false);
    expect(isSuperset(new Set([value1]), new Set([value1, value2]))).toEqual(
      false
    );
    expect(isSuperset(new Set([value1, value2]), new Set([value1]))).toEqual(
      true
    );
  });

  it('isSubset', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    expect(isSubset(new Set(), new Set())).toEqual(true);
    expect(isSubset(new Set([value1]), new Set())).toEqual(false);
    expect(isSubset(new Set(), new Set([value1]))).toEqual(true);
    expect(isSubset(new Set([value1]), new Set([value1]))).toEqual(true);

    expect(isSubset(new Set([value1]), new Set([value2]))).toEqual(false);
    expect(isSubset(new Set([value1]), new Set([value1, value2]))).toEqual(
      true
    );
    expect(isSubset(new Set([value1, value2]), new Set([value1]))).toEqual(
      false
    );
  });

  it('union', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    expect(union(new Set(), new Set())).toEqual(new Set());
    expect(union(new Set([value1]), new Set())).toEqual(new Set([value1]));
    expect(union(new Set(), new Set([value1]))).toEqual(new Set([value1]));
    expect(union(new Set([value1]), new Set([value1]))).toEqual(
      new Set([value1])
    );

    expect(union(new Set([value1]), new Set([value2]))).toEqual(
      new Set([value1, value2])
    );
    expect(union(new Set([value1]), new Set([value1, value2]))).toEqual(
      new Set([value1, value2])
    );
    expect(union(new Set([value1, value2]), new Set([value1]))).toEqual(
      new Set([value1, value2])
    );
  });

  it('intersection', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    expect(intersection(new Set(), new Set())).toEqual(new Set());
    expect(intersection(new Set([value1]), new Set())).toEqual(new Set());
    expect(intersection(new Set(), new Set([value1]))).toEqual(new Set());
    expect(intersection(new Set([value1]), new Set([value1]))).toEqual(
      new Set([value1])
    );

    expect(intersection(new Set([value1]), new Set([value2]))).toEqual(
      new Set()
    );
    expect(intersection(new Set([value1]), new Set([value1, value2]))).toEqual(
      new Set([value1])
    );
    expect(intersection(new Set([value1, value2]), new Set([value1]))).toEqual(
      new Set([value1])
    );
  });

  it('symmetricDifference', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    expect(symmetricDifference(new Set(), new Set())).toEqual(new Set());
    expect(symmetricDifference(new Set([value1]), new Set())).toEqual(
      new Set([value1])
    );
    expect(symmetricDifference(new Set(), new Set([value1]))).toEqual(
      new Set([value1])
    );
    expect(symmetricDifference(new Set([value1]), new Set([value1]))).toEqual(
      new Set()
    );

    expect(symmetricDifference(new Set([value1]), new Set([value2]))).toEqual(
      new Set([value1, value2])
    );
    expect(
      symmetricDifference(new Set([value1]), new Set([value1, value2]))
    ).toEqual(new Set([value2]));
    expect(
      symmetricDifference(new Set([value1, value2]), new Set([value1]))
    ).toEqual(new Set([value2]));
  });

  it('difference', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    expect(difference(new Set(), new Set())).toEqual(new Set());
    expect(difference(new Set([value1]), new Set())).toEqual(new Set([value1]));
    expect(difference(new Set(), new Set([value1]))).toEqual(new Set());
    expect(difference(new Set([value1]), new Set([value1]))).toEqual(new Set());

    expect(difference(new Set([value1]), new Set([value2]))).toEqual(
      new Set([value1])
    );
    expect(difference(new Set([value1]), new Set([value1, value2]))).toEqual(
      new Set()
    );
    expect(difference(new Set([value1, value2]), new Set([value1]))).toEqual(
      new Set([value2])
    );
  });

  describe('mutations', () => {
    it('add', () => {
      const set = new Set();
      const value1 = Symbol();
      add(set)(value1);
      expect(set).toEqual(new Set([value1]));

      const value2 = Symbol();
      add(set)(value2);
      expect(set).toEqual(new Set([value2, value1]));
    });

    it('addAll', () => {
      const set = new Set();
      addAll(set)([]);
      expect(set).toEqual(new Set());

      const value1 = Symbol();
      const value2 = Symbol();
      addAll(set)([value1, value2]);
      expect(set).toEqual(new Set([value2, value1]));
    });

    it('remove', () => {
      const value1 = Symbol();
      const value2 = Symbol();

      const set = new Set([value1, value2]);
      remove(set)(value1);
      expect(set).toEqual(new Set([value2]));
    });

    it('removeAll', () => {
      const value1 = Symbol();
      const value2 = Symbol();

      const set = new Set([value1]);
      removeAll(set)([value1, value2]);
      expect(set).toEqual(new Set());
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
  });
});

export {};
