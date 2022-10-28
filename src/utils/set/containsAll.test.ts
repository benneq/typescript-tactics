import { containsAll } from './containsAll';

describe('set.containsAll', () => {
  it('should return true if the Set contains all given values', () => {
    const value1 = Symbol();
    const value2 = Symbol();

    expect(containsAll(new Set())([])).toEqual(true);
    expect(containsAll(new Set())(new Set())).toEqual(true);
    expect(containsAll(new Set([value1]))([])).toEqual(true);
    expect(containsAll(new Set([value1]))(new Set())).toEqual(true);
    expect(containsAll(new Set([value1]))([value1])).toEqual(true);
    expect(containsAll(new Set([value1]))(new Set([value1]))).toEqual(true);

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

  it('should return false if the Set does not contain all given values', () => {
    const value1 = Symbol();
    const value2 = Symbol();

    expect(containsAll(new Set())([value1])).toEqual(false);
    expect(containsAll(new Set())(new Set([value1]))).toEqual(false);
    expect(containsAll(new Set([value1]))([value2])).toEqual(false);
    expect(containsAll(new Set([value1]))(new Set([value2]))).toEqual(false);
  });
});

export {};
