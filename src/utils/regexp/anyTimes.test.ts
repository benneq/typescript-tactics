import { anyTimes } from './anyTimes';

describe('regexp.anytimes', () => {
  it('should', () => {
    expect(anyTimes(/abc/)).toEqual(RegExp(/(abc)*/));
  });
});

export {};
