import { removeAll } from './removeAll';

describe('set.removeAll', () => {
  it('should remove the given values from the Set', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const value3 = Symbol();
    const set = new Set([value1, value2, value3]);

    removeAll(set)([value2, value3]);

    expect(set).toEqual(new Set([value1]));
  });

  it('should not modify the Set if the Set does not contain the values', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const value3 = Symbol();
    const set = new Set([value1]);

    removeAll(set)([value2, value3]);

    expect(set).toEqual(new Set([value1]));
  });
});

export {};
