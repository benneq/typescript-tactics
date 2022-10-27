import { filter } from './filter';

describe('set.filter', () => {
  it('filter', () => {
    expect(filter(new Set())(() => true)).toEqual(new Set());
    expect(filter(new Set())(() => false)).toEqual(new Set());

    const value1 = Symbol();
    const value2 = Symbol();
    const value3 = Symbol();
    expect(
      filter(new Set([value1, value2, value3]))((e) => e === value2)
    ).toEqual(new Set([value2]));
    expect(
      filter(new Set([value1, value2, value3]))((e) => e !== value2)
    ).toEqual(new Set([value1, value3]));
  });
});

export {};
