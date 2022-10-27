import {
  booleanNaturalOrder,
  chain,
  comparatorFor,
  falsyFirst,
  falsyLast,
  nullFirst,
  nullLast,
  numberNaturalOrder,
  predicateComparator,
  reverse,
  stringComparator,
  stringNaturalOrder,
  undefinedFirst,
  undefinedLast,
} from './comparator';
import { isNull } from './object';

describe('comparator', () => {
  it('numberNaturalOrder', () => {
    const value = [4, 2, 1, 3];
    expect(value.sort(numberNaturalOrder)).toEqual([1, 2, 3, 4]);
  });

  it('stringComparator', () => {
    const value = ['ab', 'aa', 'ba', 'bb'];
    expect(value.sort(stringComparator('de'))).toEqual([
      'aa',
      'ab',
      'ba',
      'bb',
    ]);
  });

  it('stringNaturalOrder', () => {
    const value = ['ab', 'aa', 'ba', 'bb'];
    expect(value.sort(stringNaturalOrder)).toEqual(['aa', 'ab', 'ba', 'bb']);
  });

  it('booleanNaturalOrder', () => {
    const value = [false, true];
    expect(value.sort(booleanNaturalOrder)).toEqual([false, true]);
  });

  it('reverse', () => {
    const value = [4, 2, 1, 3];
    expect(value.sort(reverse(numberNaturalOrder))).toEqual([4, 3, 2, 1]);
  });

  it('comparatorFor', () => {
    const value1 = [3, 1, 2];
    const comparator1 = comparatorFor<typeof value1[number]>((value) => value);
    expect(value1.sort(comparator1)).toEqual([1, 2, 3]);

    const value2 = [{ i: '3' }, { i: '1' }, { i: '2' }];
    const comparator2 = comparatorFor<typeof value2[number], string>(
      (value) => value.i,
      stringNaturalOrder
    );
    expect(value2.sort(comparator2)).toEqual([
      { i: '1' },
      { i: '2' },
      { i: '3' },
    ]);
  });

  it('chain', () => {
    const value1 = [
      { b: true, i: 3 },
      { b: true, i: 1 },
      { b: false, i: 2 },
    ];
    expect(value1.sort(chain())).toEqual(value1);

    const comparator = chain<typeof value1[number]>(
      comparatorFor((value) => value.b, booleanNaturalOrder),
      comparatorFor((value) => value.i)
    );

    expect(value1.sort(comparator)).toEqual([
      { b: false, i: 2 },
      { b: true, i: 1 },
      { b: true, i: 3 },
    ]);
  });

  it('predicateComparator', () => {
    const comparator = predicateComparator(numberNaturalOrder, isNull, true);
    expect([null, 3, null, 1, 2].sort(comparator)).toEqual([
      null,
      null,
      1,
      2,
      3,
    ]);
  });

  it('nullFirst', () => {
    expect([null, 3, null, 1, 2].sort(nullFirst(numberNaturalOrder))).toEqual([
      null,
      null,
      1,
      2,
      3,
    ]);
  });

  it('nullLast', () => {
    expect([null, 3, null, 1, 2].sort(nullLast(numberNaturalOrder))).toEqual([
      1,
      2,
      3,
      null,
      null,
    ]);
  });

  it('undefinedFirst', () => {
    // don't use Array.sort for test, becasue it ignores undefined values
    const comparator = undefinedFirst(numberNaturalOrder);
    expect(comparator(undefined, undefined)).toEqual(0);
    expect(comparator(undefined, 0)).toEqual(-1);
    expect(comparator(0, undefined)).toEqual(1);
  });

  it('undefinedLast', () => {
    // don't use Array.sort for test, becasue it ignores undefined values
    const comparator = undefinedLast(numberNaturalOrder);
    expect(comparator(undefined, undefined)).toEqual(0);
    expect(comparator(undefined, 0)).toEqual(1);
    expect(comparator(0, undefined)).toEqual(-1);
  });

  it('falsyFirst', () => {
    // don't use Array.sort for test, becasue it ignores undefined values
    const comparator = falsyFirst(numberNaturalOrder);
    expect(comparator(undefined, undefined)).toEqual(0);
    expect(comparator(undefined, 0)).toEqual(0);
    expect(comparator(null, '')).toEqual(0);
    expect(comparator(NaN, 1)).toEqual(-1);
    expect(comparator(1, null)).toEqual(1);
  });

  it('falsyLast', () => {
    // don't use Array.sort for test, becasue it ignores undefined values
    const comparator = falsyLast(numberNaturalOrder);
    expect(comparator(undefined, undefined)).toEqual(0);
    expect(comparator(undefined, 0)).toEqual(0);
    expect(comparator(null, '')).toEqual(0);
    expect(comparator(NaN, 1)).toEqual(1);
    expect(comparator(1, null)).toEqual(-1);
  });
});

export {};
