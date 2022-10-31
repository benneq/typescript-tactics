import { withAnchors } from './withAnchors';

describe('regexp.withAnchors', () => {
  it('should match space', () => {
    expect(withAnchors(/abc/g)).toEqual(/^(?:abc)$/g);
    expect(withAnchors(/abc/).test('abc')).toBe(true);
    expect(withAnchors(withAnchors(/abc/)).test('abc')).toBe(true);
  });
});

export {};
