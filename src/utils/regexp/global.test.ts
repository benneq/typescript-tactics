import { global } from './global';

describe('regexp.global', () => {
  it('should equal regexp', () => {
    expect(global(/abc/)).toEqual(RegExp(/abc/g));
    expect(global(/abc/gu)).toEqual(RegExp(/abc/gu));
  });
});

export {};
