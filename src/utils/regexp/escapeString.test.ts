import { escapeString } from './escapeString';

describe('regexp.escapeString', () => {
  it('should escape all characters', () => {
    expect(
      new RegExp(escapeString('a ?-_:!<0()[>]*+')).test('a ?-_:!<0()[>]*+')
    ).toBe(true);
  });
});

export {};
