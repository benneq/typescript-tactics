import { some } from './some';

describe('iterable.clamp', () => {
  it('some', () => {
    expect(some([])(() => true)).toEqual(false);
    expect(some([])(() => false)).toEqual(false);

    const value = Symbol();
    const predicate = jest.fn((val) => val === value);
    expect(some([value])(predicate)).toEqual(true);
    expect(some([Symbol()])(predicate)).toEqual(false);
    expect(some([value, Symbol()])(predicate)).toEqual(true);
  });
});

export {};
