import { whitespaceRegExp } from './whitespaceCharacterRegExp';

describe('regexp.whitespaceCharacterRegExp', () => {
  it('should match space', () => {
    expect(whitespaceRegExp.test(' ')).toBe(true);
  });

  it('should not match emoji', () => {
    expect(whitespaceRegExp.test('💩')).toBe(false);
  });

  it('should not match umlaut', () => {
    expect(whitespaceRegExp.test('ä')).toBe(false);
  });
});

export {};
