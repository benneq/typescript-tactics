import { mapValues } from './mapValues';

describe('map.mapValues', () => {
  it('mapValues', () => {
    expect(mapValues(() => true)(new Map())).toEqual(new Map());
    expect(mapValues(() => false)(new Map())).toEqual(new Map());

    const key = Symbol();
    const value = Symbol();
    const map = new Map([[key, value]]);
    expect(mapValues(() => 42)(map)).not.toBe(map);
    expect(mapValues(() => 42)(map)).toEqual(new Map([[key, 42]]));
  });
});

export {};
