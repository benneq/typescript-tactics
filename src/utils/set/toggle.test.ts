import { toggle } from './toggle';

describe('set.toggle', () => {
  it('toggle', () => {
    const value = Symbol();
    const set1 = new Set();
    toggle(set1)(value);
    expect(set1).toEqual(new Set([value]));

    const set2 = new Set([value]);
    toggle(set2)(value);
    expect(set2).toEqual(new Set());
  });
});

export {};
