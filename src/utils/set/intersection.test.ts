import { intersection } from './intersection';

describe('set.intersection', () => {
  it('should return an empty Set if any Set is empty', () => {
    const value = Symbol();

    expect(intersection(new Set())(new Set())).toEqual(new Set());
    expect(intersection(new Set([value]))(new Set())).toEqual(new Set());
    expect(intersection(new Set())(new Set())).toEqual(new Set());
  });

  it('should return an empty Set if setA does not contain elements of setB', () => {
    const value1 = Symbol();
    const value2 = Symbol();

    expect(intersection(new Set([value1]))(new Set([value2]))).toEqual(
      new Set()
    );
  });

  it('should return an empty Set if setB does not contain elements of setA', () => {
    const value1 = Symbol();
    const value2 = Symbol();

    expect(intersection(new Set([value1]))(new Set([value2]))).toEqual(
      new Set()
    );
  });

  it('should return a new Set containing all elements that are in both Sets', () => {
    const value1 = Symbol();
    const value2 = Symbol();

    expect(intersection(new Set([value1]))(new Set([value1]))).toEqual(
      new Set([value1])
    );

    expect(intersection(new Set([value1]))(new Set([value1, value2]))).toEqual(
      new Set([value1])
    );

    expect(intersection(new Set([value1, value2]))(new Set([value1]))).toEqual(
      new Set([value1])
    );
  });
});

export {};
