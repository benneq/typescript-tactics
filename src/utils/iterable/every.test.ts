import { every } from './every';

describe('iterable.every', () => {
  it('every', () => {
    expect(every([])(() => true)).toEqual(true);
    expect(every([])(() => false)).toEqual(true);

    const value = Symbol();
    const predicate = jest.fn((val) => val === value);
    expect(every([value])(predicate)).toEqual(true);
    expect(every([Symbol()])(predicate)).toEqual(false);
    expect(every([value, Symbol()])(predicate)).toEqual(false);
  });
});

export {};
