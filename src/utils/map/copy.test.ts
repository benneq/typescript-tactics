import { copy } from './copy';

describe('map.copy', () => {
  it('should return a new Map', () => {
    const map = new Map();

    const result = copy(map);

    expect(result).toEqual(new Map());
    expect(result).not.toBe(map);
  });

  it('should copy all keys and values', () => {
    const key = Symbol();
    const value = Symbol();
    const map = new Map([[key, value]]);

    const result = copy(map);

    expect(result).toEqual(new Map([[key, value]]));
    expect(result).not.toBe(map);
  });
});

export {};
