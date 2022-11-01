import { difference } from './difference';

describe('set.difference', () => {
  it('should return an empty Set if setA is empty', () => {
    const value = Symbol();

    expect(difference(new Set())(new Set())).toEqual(new Set());

    expect(difference(new Set([value]))(new Set())).toEqual(new Set());
  });

  it('should return an empty Set if setB contains all elements of setA', () => {
    const value1 = Symbol();
    const value2 = Symbol();

    expect(difference(new Set([value1]))(new Set([value1]))).toEqual(new Set());

    expect(difference(new Set([value1, value2]))(new Set([value1]))).toEqual(
      new Set()
    );
  });

  it('should return a new Set containing the elements of setA if setB is empty', () => {
    const value1 = Symbol();
    const value2 = Symbol();

    expect(difference(new Set())(new Set([value1, value2]))).toEqual(
      new Set([value1, value2])
    );
  });

  it('should return a new Set containing the elements of setA that are not in setB', () => {
    const value1 = Symbol();
    const value2 = Symbol();

    expect(difference(new Set([value2]))(new Set([value1]))).toEqual(
      new Set([value1])
    );

    expect(difference(new Set([value1]))(new Set([value1, value2]))).toEqual(
      new Set([value2])
    );
  });
});

export {};
