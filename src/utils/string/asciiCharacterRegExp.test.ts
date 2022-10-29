import { asciiCharacterRegExp } from './asciiCharacterRegExp';

describe('string.asciiCharacterRegExp', () => {
  it('should match space', () => {
    expect(asciiCharacterRegExp.test(' ')).toBe(true);
  });

  it('should not match emoji', () => {
    expect(asciiCharacterRegExp.test('💩')).toBe(false);
  });

  it('should not match umlaut', () => {
    expect(asciiCharacterRegExp.test('ä')).toBe(false);
  });
});

export {};
