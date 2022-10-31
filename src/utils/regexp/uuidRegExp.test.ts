import { uuidRegExp } from './uuidRegExp';

describe('regexp.uuidRegExp', () => {
  it('should match random UUID', () => {
    expect(uuidRegExp.test(crypto.randomUUID())).toBe(true);
  });

  it('should match fixed UUID', () => {
    expect(uuidRegExp.test('00000000-0000-1000-8000-000000000000')).toBe(true);
    expect(uuidRegExp.test('ffffffff-ffff-1fff-bfff-ffffffffffff')).toBe(true);
  });

  it('should ignore casing', () => {
    expect(uuidRegExp.test('00000000-0000-1000-8000-000000000000')).toBe(true);
    expect(uuidRegExp.test('FFFFFFFF-FFFF-1FFF-BFFF-FFFFFFFFFFFF')).toBe(true);
  });

  it('should not match emoji', () => {
    expect(uuidRegExp.test('💩')).toBe(false);
  });

  it('should not match umlaut', () => {
    expect(uuidRegExp.test('ä')).toBe(false);
  });
});

export {};
