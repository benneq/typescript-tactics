import { splice } from './splice';

describe('string.splice', () => {
  it('should return the same string if replacement is empty', () => {
    expect(splice('', 1, 0, '')).toBe('');
    expect(splice('str', 0, 0, '')).toBe('str');
  });

  it('should return the replacement if value is empty', () => {
    expect(splice('', 0, 3, 'str')).toBe('str');
    expect(splice('', 1, 3, 'str')).toBe('str');
  });

  it('should not override any character if the replacement length is 0', () => {
    expect(splice('aaa', 0, 0, '')).toBe('aaa');
    expect(splice('aaa', 0, 0, 'b')).toBe('baaa');
  });

  it('should override the characters at the specified index with the replacement', () => {
    expect(splice('aaa', 0, 1, 'b')).toBe('baa');
    expect(splice('aaa', 1, 3, 'bbb')).toBe('abbb');
    expect(splice('aaa', 0, 2, 'b')).toBe('ba');
  });

  it('should work with negative index', () => {
    expect(splice('aaa', -1, 1, 'b')).toBe('aab');
    expect(splice('aaa', -2, 3, 'bbb')).toBe('abbb');
  });

  it('should handle default values', () => {
    expect(splice('aaa')).toBe('');
    expect(splice('aaa', 1)).toBe('a');
    expect(splice('aaa', -2)).toBe('a');
    expect(splice('aaa', 1, 99)).toBe('a');
    expect(splice('aaa', 1, -1)).toBe('aaa');
  });
});

export {};
