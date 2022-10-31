import { whitespaceRegExp } from './whitespaceRegExp';

describe('regexp.whitespaceRegExp', () => {
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
