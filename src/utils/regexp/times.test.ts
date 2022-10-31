import { times } from './times';

describe('regexp.times', () => {
  it('should equal regexp', () => {
    expect(times(/abc/, 0)).toEqual(RegExp(/(abc){0,}/));
    expect(times(/abc/, 1, 1)).toEqual(RegExp(/(abc){1,1}/));
    expect(times(/abc/, 2, 4)).toEqual(RegExp(/(abc){2,4}/));
    expect(times(/abc/g, 1)).toEqual(RegExp(/(abc){1,}/g));
  });
});

export {};
