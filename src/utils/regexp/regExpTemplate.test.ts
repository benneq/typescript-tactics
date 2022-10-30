import { whitespaceRegExp } from '../string/whitespaceRegExp';
import { regExpTemplate } from './regExpTemplate';

describe('regexp.regExpTemplate', () => {
  it('should', () => {
    expect(regExpTemplate``).toEqual(new RegExp(''));
    expect(regExpTemplate`abc`).toEqual(new RegExp('abc'));
    expect(regExpTemplate`a${whitespaceRegExp}b`).toEqual(
      new RegExp('a' + whitespaceRegExp.source + 'b')
    );
  });
});

export {};
