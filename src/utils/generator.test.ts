import { done, filter, flatMap, map, takeWhile, toArray } from './generator';

describe('generator', () => {
  it('done', () => {
    const generator = done;
    expect(generator.next().done).toEqual(true);
    expect(generator.next().done).toEqual(true);
    expect(generator.next().done).toEqual(true);
  });

  it('filter', () => {
    function* gen(i = 0) {
      while (true) {
        yield i++;
      }
    }
    const generator = filter((value: number) => value > 3)(gen());
    expect(generator.next().value).toEqual(4);
    expect(generator.next().value).toEqual(5);
    expect(generator.next().value).toEqual(6);
    expect(generator.next().done).toEqual(false);
  });

  it('takeWhile', () => {
    function* gen(i = 0) {
      while (true) {
        yield i++;
      }
    }
    const generator = takeWhile((value: number) => value < 3)(gen());
    expect(generator.next().value).toEqual(0);
    expect(generator.next().value).toEqual(1);
    expect(generator.next().value).toEqual(2);
    expect(generator.next().done).toEqual(true);
  });

  it('map', () => {
    function* gen(i = 0) {
      while (true) {
        yield i++;
      }
    }
    const generator = map((value) => String(value))(gen());
    expect(generator.next().value).toEqual('0');
    expect(generator.next().value).toEqual('1');
    expect(generator.next().value).toEqual('2');
    expect(generator.next().done).toEqual(false);
  });

  it('flatMap', () => {
    function* outerGen(i = 0) {
      while (i < 3) {
        yield i++;
      }
    }

    function* innerGen(value: number) {
      yield value;
      yield value * 2;
    }

    const generator = flatMap((value: number) => innerGen(value))(outerGen());
    expect(generator.next().value).toEqual(0);
    expect(generator.next().value).toEqual(0);
    expect(generator.next().value).toEqual(1);
    expect(generator.next().value).toEqual(2);
    expect(generator.next().value).toEqual(2);
    expect(generator.next().value).toEqual(4);
  });

  it('toArray', () => {
    function* gen(i = 0) {
      while (i < 3) {
        yield i++;
      }
    }
    expect(toArray(gen())).toEqual([0, 1, 2]);
  });
});

export {};
