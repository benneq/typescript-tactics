import { includesAll } from './includesAll';

describe('array.includesAll', () => {
  it('should return true if no values were provided', () => {
    const value = Symbol();

    expect(includesAll([])([])).toBe(true);
    expect(includesAll([value])([])).toBe(true);
  });

  it('should return true if Array includes all given values', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const value3 = Symbol();

    expect(includesAll([value1])([value1])).toBe(true);
    expect(includesAll([value1, value2, value3])([value2, value3])).toBe(true);
  });

  it('should return false if Array does not include all given values', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const value3 = Symbol();

    expect(includesAll([value1])([value1, value2])).toBe(false);
    expect(includesAll([value1, value3])([value1, value2])).toBe(false);
  });
});

export {};
