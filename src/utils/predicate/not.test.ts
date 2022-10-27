import { alwaysFalse } from './alwaysFalse';
import { alwaysTrue } from './alwaysTrue';
import { not } from './not';

describe('predicate.not', () => {
  it('not', () => {
    expect(not(alwaysTrue)(Symbol())).toEqual(false);
    expect(not(alwaysFalse)(Symbol())).toEqual(true);

    expect(not((value) => value === 3)(2)).toEqual(true);
    expect(not((value) => value === 3)(3)).toEqual(false);
  });
});

export {};
