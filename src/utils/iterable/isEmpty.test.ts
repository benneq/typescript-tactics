import { isEmpty } from './isEmpty';

describe('iterable.clamp', () => {
  it('isEmpty', () => {
    expect(isEmpty('')).toEqual(true);
    expect(isEmpty([])).toEqual(true);
    expect(isEmpty(new Set())).toEqual(true);
    expect(isEmpty(new Map())).toEqual(true);

    expect(isEmpty('a')).toEqual(false);
    expect(isEmpty([Symbol()])).toEqual(false);
    expect(isEmpty(new Set([Symbol()]))).toEqual(false);
    expect(isEmpty(new Map([[Symbol(), Symbol()]]))).toEqual(false);
  });
});

export {};
