import { asciiCharacterRegExp } from './asciiCharacterRegExp';
import { asciiLetterRegExp } from './asciiLetterRegExp';

describe('regexp.asciiCharacterRegExp', () => {
  it('should not match lowercase letter', () => {
    expect(asciiLetterRegExp.test('a')).toBe(true);
  });

  it('should not match uppercase letter', () => {
    expect(asciiLetterRegExp.test('A')).toBe(true);
  });

  it('should not match space', () => {
    expect(asciiLetterRegExp.test(' ')).toBe(false);
  });

  it('should not match emoji', () => {
    expect(asciiCharacterRegExp.test('💩')).toBe(false);
  });

  it('should not match umlaut', () => {
    expect(asciiCharacterRegExp.test('ä')).toBe(false);
  });
});

export {};
