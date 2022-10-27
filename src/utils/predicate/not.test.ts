import { not } from './not';

describe('predicate.not', () => {
  it('not', () => {
    expect(not(() => true)(Symbol())).toEqual(false);
    expect(not(() => false)(Symbol())).toEqual(true);

    expect(not((value) => value === 3)(2)).toEqual(true);
    expect(not((value) => value === 3)(3)).toEqual(false);
  });
});

export {};
