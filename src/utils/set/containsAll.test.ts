import { containsAll } from './containsAll';

describe('set.containsAll', () => {
  it('containsAll', () => {
    const value1 = Symbol();
    const value2 = Symbol();

    expect(containsAll(new Set())([])).toEqual(true);
    expect(containsAll(new Set())(new Set())).toEqual(true);
    expect(containsAll(new Set())([value1])).toEqual(false);
    expect(containsAll(new Set())(new Set([value1]))).toEqual(false);
    expect(containsAll(new Set([value1]))([])).toEqual(true);
    expect(containsAll(new Set([value1]))(new Set())).toEqual(true);
    expect(containsAll(new Set([value1]))([value1])).toEqual(true);
    expect(containsAll(new Set([value1]))(new Set([value1]))).toEqual(true);
    expect(containsAll(new Set([value1]))([value2])).toEqual(false);
    expect(containsAll(new Set([value1]))(new Set([value2]))).toEqual(false);

    expect(containsAll(new Set([value1, value2]))(new Set([value1]))).toEqual(
      true
    );
    expect(containsAll(new Set([value1, value2]))(new Set([value2]))).toEqual(
      true
    );
    expect(
      containsAll(new Set([value1, value2]))(new Set([value2, value1]))
    ).toEqual(true);
  });
});

export {};
