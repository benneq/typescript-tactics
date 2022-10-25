import { done, filter, map, takeWhile } from './generator';

describe('generator', () => {
  it('done', () => {
    const generator = done;
    expect(generator.next().done).toEqual(true);
    expect(generator.next().done).toEqual(true);
    expect(generator.next().done).toEqual(true);
  });

  it('filter', () => {
    function* gen() {
      let i = 0;
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
    function* gen() {
      let i = 0;
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
    function* gen() {
      let i = 0;
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
});

export {};
