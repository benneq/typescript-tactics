import { printableCharacterRegExp } from './printableCharacterRegExp';

describe('string.printableCharacterRegExp', () => {
  it('should match space', () => {
    expect(printableCharacterRegExp.test(' ')).toBe(true);
  });

  it('should match emoji', () => {
    expect(printableCharacterRegExp.test('💩')).toBe(true);
  });

  it('should match umlaut', () => {
    expect(printableCharacterRegExp.test('ä')).toBe(true);
  });
});

export {};
