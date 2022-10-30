import { compactWhitespace } from './compactWhitespace';

describe('iterable.compactWhitespace', () => {
  it('should trim multiple whitespaces', () => {
    expect(compactWhitespace('')).toBe('');
    expect(compactWhitespace('aaa')).toBe('aaa');
    expect(compactWhitespace(' ')).toBe(' ');
    expect(compactWhitespace(' a a ')).toBe(' a a ');
    expect(compactWhitespace('  ')).toBe(' ');
    expect(compactWhitespace('  a  a  ')).toBe(' a a ');
  });
});

export {};
