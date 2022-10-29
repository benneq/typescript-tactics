import { toggleAll } from './toggleAll';

describe('set.toggleAll', () => {
  it('should not modify the Set if the value Array is empty', () => {
    const set = new Set();
    toggleAll(set)([]);
    expect(set).toEqual(new Set());
  });

  it('should add the given values to the Set if they were not already in the Set', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const value3 = Symbol();
    const set = new Set([value1]);

    toggleAll(set)([value2, value3]);
    expect(set).toEqual(new Set([value1, value2, value3]));
  });

  it('should remove the given values from the Set if they were already in the Set', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const value3 = Symbol();
    const set = new Set([value1, value2, value3]);

    toggleAll(set)([value1, value2]);
    expect(set).toEqual(new Set([value3]));
  });

  it('should add values that were not present and remove values that were already present', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const value3 = Symbol();
    const set = new Set([value1, value2]);

    toggleAll(set)([value2, value3]);
    expect(set).toEqual(new Set([value1, value3]));
  });
});

export {};
