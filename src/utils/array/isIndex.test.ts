import { isIndex } from './isIndex';

describe('array.isIndex', () => {
  it('isIndex', () => {
    expect(isIndex([])(0)).toEqual(false);
    expect(isIndex([])(1)).toEqual(false);

    expect(isIndex([1, 2, 3])(-1)).toEqual(false);
    expect(isIndex([1, 2, 3])(0)).toEqual(true);
    expect(isIndex([1, 2, 3])(1)).toEqual(true);
    expect(isIndex([1, 2, 3])(2)).toEqual(true);
    expect(isIndex([1, 2, 3])(3)).toEqual(false);
  });
});

export {};
