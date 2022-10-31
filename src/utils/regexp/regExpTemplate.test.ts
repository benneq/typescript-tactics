import { whitespaceRegExp } from './whitespaceRegExp';
import { regExpTemplate } from './regExpTemplate';
import { asciiLetterRegExp } from './asciiLetterRegExp';
import { times } from './times';
import { digitCharacterRegExp } from './digitCharacterRegExp';
import { withAnchors } from './withAnchors';

describe('regexp.regExpTemplate', () => {
  it('should equal RegExp', () => {
    expect(regExpTemplate``).toEqual(new RegExp(''));
    expect(regExpTemplate`abc`).toEqual(new RegExp('abc'));
    expect(regExpTemplate`a${whitespaceRegExp}b`).toEqual(
      new RegExp('a' + whitespaceRegExp.source + 'b')
    );

    expect(regExpTemplate`^(?:hello|bye)$`.test('bye')).toBe(true);

    expect(
      withAnchors(
        regExpTemplate`${times(
          asciiLetterRegExp,
          3
        )} ${digitCharacterRegExp}-(${times(digitCharacterRegExp, 2)})`
      ).test('abcd 1-11')
    ).toBe(true);
  });
});

export {};
