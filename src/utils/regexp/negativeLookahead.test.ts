import { negate } from './negativeLookahead';

describe('regexp.negativeLookahead', () => {
  it('should equal regexp', () => {
    expect(negate(/abc/)).toEqual(RegExp(/(?!abc)/));
    expect(negate(/abc/gu)).toEqual(RegExp(/(?!abc)/gu));
  });
});

export {};
