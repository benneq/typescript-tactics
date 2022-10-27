import { contains } from './contains';

describe('set.contains', () => {
  it('contains', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    expect(contains(new Set())(value1)).toEqual(false);
    expect(contains(new Set([value1]))(value2)).toEqual(false);
    expect(contains(new Set([value1]))(value1)).toEqual(true);
  });
});

export {};
