import { fromIterable } from './fromIterable';

describe('map.fromIterable', () => {
  it('fromIterable', () => {
    const key = Symbol();
    const value = Symbol();
    expect(fromIterable(() => [key, value])([])).toEqual(new Map());
    expect(fromIterable(() => [key, value])(new Set())).toEqual(new Map());
    expect(fromIterable(() => [key, value])(new Map())).toEqual(new Map());

    expect(fromIterable((e) => [key, e])([0])).toEqual(new Map([[key, 0]]));
    expect(fromIterable((e) => [e, value])([0, 1])).toEqual(
      new Map([
        [0, value],
        [1, value],
      ])
    );
  });
});

export {};
