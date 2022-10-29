import { toggle } from './toggle';

describe('set.toggle', () => {
  it('should add the given value to the Set if it was not already in the Set', () => {
    const value = Symbol();
    const set = new Set();

    toggle(set)(value);

    expect(set).toEqual(new Set([value]));
  });

  it('should remove the given value from the Set if it was already in the Set', () => {
    const value = Symbol();
    const set = new Set([value]);

    toggle(set)(value);

    expect(set).toEqual(new Set());
  });
});

export {};
