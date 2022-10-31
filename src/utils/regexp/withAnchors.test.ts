import { withAnchors } from './withAnchors';

describe('regexp.whitespaceRegExp', () => {
  it('should match space', () => {
    expect(withAnchors(/abc/g)).toEqual(/^(?:abc)$/g);
    expect(withAnchors(/abc/).test('abc')).toBe(true);
    expect(withAnchors(withAnchors(/abc/)).test('abc')).toBe(true);
  });
});

export {};
