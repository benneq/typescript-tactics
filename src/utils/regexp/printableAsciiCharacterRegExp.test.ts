import { printableAsciiCharacterRegExp } from './printableAsciiCharacterRegExp';

describe('regexp.printableAsciiCharacterRegExp', () => {
  it('should match space', () => {
    expect(printableAsciiCharacterRegExp.test(' ')).toBe(true);
  });

  it('should not match emoji', () => {
    expect(printableAsciiCharacterRegExp.test('💩')).toBe(false);
  });

  it('should not match umlaut', () => {
    expect(printableAsciiCharacterRegExp.test('ä')).toBe(false);
  });
});

export {};
