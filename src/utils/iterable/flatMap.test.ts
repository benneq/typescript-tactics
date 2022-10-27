import { flatMap } from './flatMap';

describe('iterable.flatMap', () => {
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
});

export {};
