import { negate } from './negate';

describe('regexp.negate', () => {
  it('should equal regexp', () => {
    expect(negate(/abc/)).toEqual(RegExp(/(?!abc)/));
    expect(negate(/abc/gu)).toEqual(RegExp(/(?!abc)/gu));
  });
});

export {};
