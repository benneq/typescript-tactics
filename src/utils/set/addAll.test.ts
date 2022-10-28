import { addAll } from './addAll';

describe('set.addAll', () => {
  it('should add the given values to the Set', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const value3 = Symbol();
    const set = new Set([value1]);

    addAll(set)([value2, value3]);
    expect(set).toEqual(new Set([value1, value2, value3]));
  });

  it('should not modify the Set if the values are already present', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const value3 = Symbol();
    const set = new Set([value1, value2, value3]);

    addAll(set)([value2, value3]);
    expect(set).toEqual(new Set([value1, value2, value3]));
  });
});

export {};
