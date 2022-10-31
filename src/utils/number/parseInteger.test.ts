import { parseInteger } from './parseInteger';

describe('number.mod', () => {
  it('should return undefined if parsing failed', () => {
    expect(parseInteger('')).toBeUndefined();
    expect(parseInteger('a')).toBeUndefined();
    expect(parseInteger(' ')).toBeUndefined();
  });

  it('should return the first parseable Integer', () => {
    expect(parseInteger('1a')).toBe(1);
    expect(parseInteger('  2')).toBe(2);
    expect(parseInteger('3.4')).toBe(3);
  });
});

export {};
