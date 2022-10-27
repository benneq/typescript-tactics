import { toggleAll } from './toggleAll';

describe('set.toggleAll', () => {
  it('toggleAll', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const set1 = new Set();
    toggleAll(set1)([]);
    expect(set1).toEqual(new Set());

    toggleAll(set1)([value1]);
    expect(set1).toEqual(new Set([value1]));

    toggleAll(set1)([value2]);
    expect(set1).toEqual(new Set([value1, value2]));

    toggleAll(set1)([value2, value1]);
    expect(set1).toEqual(new Set());
  });
});

export {};
