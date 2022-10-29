import { remove } from './remove';

describe('set.remove', () => {
  it('should remove the given value from the Set', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const set = new Set([value1, value2]);

    remove(set)(value2);

    expect(set).toEqual(new Set([value1]));
  });

  it('should not modify the Set if the Set does not contain the value', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const set = new Set([value1]);

    remove(set)(value2);

    expect(set).toEqual(new Set([value1]));
  });
});

export {};
