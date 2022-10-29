import { asciiCharacterRegExp } from './asciiCharacterRegExp';
import { uppercaseAsciiLetterRange } from './uppercaseAsciiLetterRange';

describe('string.uppercaseAsciiLetterRange', () => {
  it('should return a range for the character codes from a to z', () => {
    for (
      let i = uppercaseAsciiLetterRange[0];
      i <= uppercaseAsciiLetterRange[1];
      i++
    ) {
      expect(String.fromCharCode(i)).toMatch(asciiCharacterRegExp);
    }
  });
});

export {};
