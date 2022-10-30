import { filterByValue } from './filterByValue';

describe('array.filterByValue', () => {
  it('should return empty Array if provided Array is empty', () => {
    const value = Symbol();

    expect(filterByValue([])([])).toEqual([]);
    expect(filterByValue([value])([])).toEqual([]);
  });

  it('should return the same Array if allowed values are empty', () => {
    const value1 = Symbol();
    const value2 = Symbol();

    expect(filterByValue<symbol>([])([value1])).toEqual([]);
    expect(filterByValue<symbol>([])([value1, value2])).toEqual([]);
  });

  it('should return a new Array with only values that are allowed', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const value3 = Symbol();

    expect(filterByValue([value1])([value1, value2])).toEqual([value1]);
    expect(filterByValue([value1, value3])([value1, value2])).toEqual([value1]);
    expect(filterByValue([value1, value2])([value1, value2])).toEqual([
      value1,
      value2,
    ]);
  });
});

export {};
