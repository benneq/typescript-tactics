import { emailRegExp } from './emailRegExp';

describe('regexp.emailRegExp', () => {
  it('should match email address', () => {
    expect(emailRegExp.test('a@b.c')).toBe(true);
  });

  it('should not match number', () => {
    expect(emailRegExp.test('123')).toBe(false);
  });
});

export {};
