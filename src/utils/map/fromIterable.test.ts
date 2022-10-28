import { fromIterable } from './fromIterable';

describe('map.fromIterable', () => {
  it('should return an empty Map if the Iterable is empty', () => {
    expect(fromIterable(() => [Symbol(), Symbol()])([])).toEqual(new Map());
    expect(fromIterable(() => [Symbol(), Symbol()])(new Set())).toEqual(
      new Map()
    );
    expect(fromIterable(() => [Symbol(), Symbol()])(new Map())).toEqual(
      new Map()
    );
  });

  it('should return a Map containing the mapped key-value pairs', () => {
    const key = Symbol();
    const value = Symbol();

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
