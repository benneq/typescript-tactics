import { parseFloat } from './parseFloat';

describe('number.mod', () => {
  it('should return undefined if parsing failed', () => {
    expect(parseFloat('')).toBeUndefined();
    expect(parseFloat('a')).toBeUndefined();
    expect(parseFloat(' ')).toBeUndefined();
  });

  it('should return the first parseable Integer', () => {
    expect(parseFloat('1a')).toBe(1);
    expect(parseFloat('  2')).toBe(2);
    expect(parseFloat('3.4')).toBe(3.4);
    expect(parseFloat(' 9.001e3a')).toBe(9001);
  });
});

export {};
