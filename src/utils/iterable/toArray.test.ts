import { toArray } from './toArray';

describe('iterable.toArray', () => {
  it('should return an Array with the same elements as the Iterable in the same order', () => {
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
