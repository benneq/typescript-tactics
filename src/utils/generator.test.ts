import { done, map, takeUntil } from './generator';

describe('generator', () => {
  it('done', () => {
    const generator = done();
    expect(generator.next().done).toEqual(true);
  });

  it('takeUntil', () => {
    function* gen() {
      let i = 0;
      while (true) {
        yield i++;
      }
    }
    const generator = takeUntil(gen(), (value) => value === 3);
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
    const generator = map(gen(), (value) => value.toString());
    expect(generator.next().value).toEqual('0');
    expect(generator.next().value).toEqual('1');
    expect(generator.next().value).toEqual('2');
    expect(generator.next().done).toEqual(false);
  });
});

export {};
