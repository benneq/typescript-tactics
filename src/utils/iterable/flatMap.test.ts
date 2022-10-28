import { flatMap } from './flatMap';

describe('iterable.flatMap', () => {
  it('should yield yield every element of each Iterable in order', () => {
    function* innerIterable(value: number) {
      yield value;
      yield value * 2;
    }
    const mapper = (value: number) => innerIterable(value);
    const generator = flatMap(mapper)([0, 1, 2]);

    expect(generator.next().value).toBe(0);
    expect(generator.next().value).toBe(0);
    expect(generator.next().value).toBe(1);
    expect(generator.next().value).toBe(2);
    expect(generator.next().value).toBe(2);
    expect(generator.next().value).toBe(4);
    expect(generator.next().done).toBe(true);
  });
});

export {};
