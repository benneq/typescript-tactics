import { addAll } from './addAll';

describe('set.addAll', () => {
  it('addAll', () => {
    const set = new Set();
    addAll(set)([]);
    expect(set).toEqual(new Set());

    const value1 = Symbol();
    const value2 = Symbol();
    addAll(set)([value1, value2]);
    expect(set).toEqual(new Set([value2, value1]));
  });
});

export {};
