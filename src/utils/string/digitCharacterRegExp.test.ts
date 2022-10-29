import { digitCharacterRegExp } from './digitCharacterRegExp';

describe('string.digitCharacterRegExp', () => {
  it('should match 0 to 9', () => {
    for (let i = 0; i <= 9; i++) {
      expect(digitCharacterRegExp.test(i.toString())).toBe(true);
    }
  });

  it('should not match emoji', () => {
    expect(digitCharacterRegExp.test('💩')).toBe(false);
  });

  it('should not match umlaut', () => {
    expect(digitCharacterRegExp.test('ä')).toBe(false);
  });

  it('should not match letter', () => {
    expect(digitCharacterRegExp.test('a')).toBe(false);
  });
});

export {};
