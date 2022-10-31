import { asciiCharacterRegExp } from '../regexp/asciiCharacterRegExp';
import { lowercaseAsciiLetterRange } from './lowercaseAsciiLetterRange';

describe('string.lowercaseAsciiLetterRange', () => {
  it('should return a range for the character codes from a to z', () => {
    for (
      let i = lowercaseAsciiLetterRange[0];
      i <= lowercaseAsciiLetterRange[1];
      i++
    ) {
      expect(String.fromCharCode(i)).toMatch(asciiCharacterRegExp);
    }
  });
});

export {};
