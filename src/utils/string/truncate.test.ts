import { truncate } from './truncate';

describe('string.truncate', () => {
  it('should return the truncated string', () => {
    expect(truncate('123456789', 1)).toBe('1');

    expect(truncate('123456789', -6)).toBe('123');

    expect(truncate('123456789', 5, '...')).toBe('12...');

    expect(truncate('123456789', 1, '...')).toBe('.');

    expect(truncate('123 45 6789', 1, '...', ' ')).toBe('.');
    expect(truncate('123 45 6789', 4, '...', ' ')).toBe('1...');
    expect(truncate('123 45 6789', 6, '...', ' ')).toBe('123...');
    expect(truncate('123 45 6789', 7, '...', ' ')).toBe('123...');
    expect(truncate('123 45 6789', 8, '...', ' ')).toBe('123...');
    expect(truncate('123 45 6789', 9, '...', ' ')).toBe('123 45...');

    expect(truncate('123  45  6789', 10, '...', '  ')).toBe('123...');
    expect(truncate('123  45  6789', 11, '...', '  ')).toBe('123  45...');
  });
});

export {};
