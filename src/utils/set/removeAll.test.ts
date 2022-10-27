import { removeAll } from './removeAll';

describe('set.removeAll', () => {
  it('removeAll', () => {
    const value1 = Symbol();
    const value2 = Symbol();

    const set = new Set([value1]);
    removeAll(set)([value1, value2]);
    expect(set).toEqual(new Set());
  });
});

export {};
