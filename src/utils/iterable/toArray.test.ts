import { toArray } from './toArray';

describe('iterable.clamp', () => {
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
