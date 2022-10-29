import { add } from './add';

describe('set.add', () => {
  it('should add the given value to the Set', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const set = new Set([value1]);

    add(set)(value2);

    expect(set).toEqual(new Set([value1, value2]));
  });

  it('should not modify the Set if the value is already present', () => {
    const value = Symbol();
    const set = new Set([value]);

    add(set)(value);

    expect(set).toEqual(new Set([value]));
  });
});

export {};
