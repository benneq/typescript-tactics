import { toReverseIterable } from './toReverseIterable';

describe('array.toReverseIterable', () => {
  it('should be done immediatly if array is empty', () => {
    const generator = toReverseIterable([]);
    expect(generator.next().done).toBe(true);
  });

  it('should yield the elements in reverse order', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const value3 = Symbol();

    const generator = toReverseIterable([value1, value2, value3]);
    expect(generator.next().value).toBe(value3);
    expect(generator.next().value).toBe(value2);
    expect(generator.next().value).toBe(value1);
    expect(generator.next().done).toBe(true);
  });
});

export {};
