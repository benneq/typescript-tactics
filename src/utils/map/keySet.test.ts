import { keySet } from './keySet';

describe('map.keySet', () => {
  it('should return an empty Set if the given Map is empty', () => {
    expect(keySet(new Map())).toEqual(new Set());
  });

  it('should return a Set containg the keys of the Map', () => {
    const key = Symbol();
    expect(keySet(new Map([[key, Symbol()]]))).toEqual(new Set([key]));
  });
});

export {};
