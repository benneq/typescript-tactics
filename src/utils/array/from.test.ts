import { from } from './from';

describe('array.from', () => {
  it('should return the same instance if the provided value is already an Array', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const array = [value1, value2];

    const result = from(array);

    expect(result).toBe(array);
    expect(result).toEqual([value1, value2]);
  });

  it('should copy all Set elements', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const set = new Set([value1, value2]);

    const result = from(set);

    expect(result).toEqual([value1, value2]);
    expect(set).toEqual(new Set([value1, value2]));
  });

  it('should create a new Array with the provided value', () => {
    const value = Symbol();
    const result = from(value);
    expect(result).toEqual([value]);

    expect(from(undefined)).toEqual([undefined]);
    expect(from(null)).toEqual([null]);
    expect(from(NaN)).toEqual([NaN]);
    expect(from(0)).toEqual([0]);
    expect(from(true)).toEqual([true]);
    expect(from({})).toEqual([{}]);
    expect(from('')).toEqual(['']);
    expect(from(new Map())).toEqual([new Map()]);
  });
});

export {};
