import { keySet } from './keySet';

describe('map.keySet', () => {
  it('keySet', () => {
    const key = Symbol();
    expect(keySet(new Map())).toEqual(new Set());
    expect(keySet(new Map([[key, Symbol()]]))).toEqual(new Set([key]));
  });
});

export {};
