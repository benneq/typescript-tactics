import { splice } from './splice';

describe('string.splice', () => {
  it('should return the same string if replacement is empty', () => {
    expect(splice(1, 0, '')('')).toBe('');
    expect(splice(0, 0, '')('str')).toBe('str');
  });

  it('should return the replacement if value is empty', () => {
    expect(splice(0, 3, 'str')('')).toBe('str');
    expect(splice(1, 3, 'str')('')).toBe('str');
  });

  it('should not override any character if the replacement length is 0', () => {
    expect(splice(0, 0, '')('aaa')).toBe('aaa');
    expect(splice(0, 0, 'b')('aaa')).toBe('baaa');
  });

  it('should override the characters at the specified index with the replacement', () => {
    expect(splice(0, 1, 'b')('aaa')).toBe('baa');
    expect(splice(1, 3, 'bbb')('aaa')).toBe('abbb');
    expect(splice(0, 2, 'b')('aaa')).toBe('ba');
  });

  it('should work with negative index', () => {
    expect(splice(-1, 1, 'b')('aaa')).toBe('aab');
    expect(splice(-2, 3, 'bbb')('aaa')).toBe('abbb');
  });

  it('should handle default values', () => {
    expect(splice()('aaa')).toBe('');
    expect(splice(1)('aaa')).toBe('a');
    expect(splice(-2)('aaa')).toBe('a');
    expect(splice(1, 99)('aaa')).toBe('a');
    expect(splice(1, -1)('aaa')).toBe('aaa');
  });
});

export {};
