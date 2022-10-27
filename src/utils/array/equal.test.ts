import { equal } from './equal';

describe('array.equal', () => {
  it('equal', () => {
    expect(equal([])([])).toEqual(true);
    expect(equal<number>([])([0])).toEqual(false);
    expect(equal([0])([])).toEqual(false);
    expect(equal([1, 2])([1, 2])).toEqual(true);
    expect(equal([1, 2])([2, 1])).toEqual(false);
  });
});

export {};
