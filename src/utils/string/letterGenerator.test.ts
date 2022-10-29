import { letterGenerator } from './letterGenerator';
import { lowercaseAsciiLetterRange } from './lowercaseAsciiLetterRange';

describe('string.step', () => {
  it('should start with a if no value was provided', () => {
    const generator = letterGenerator(lowercaseAsciiLetterRange);
    expect(generator.next().value).toBe('a');
    expect(generator.next().value).toBe('b');
    expect(generator.next().value).toBe('c');
    expect(generator.next().done).toBe(false);
  });

  it('should generate the same letter if stepSize is 0', () => {
    const generator = letterGenerator(lowercaseAsciiLetterRange, '', 0);
    expect(generator.next().value).toBe('a');
    expect(generator.next().value).toBe('a');
    expect(generator.next().value).toBe('a');
    expect(generator.next().done).toBe(false);
  });

  it('should stop after eaching the end of the range', () => {
    const generator = letterGenerator(lowercaseAsciiLetterRange, 'x');
    expect(generator.next().value).toBe('x');
    expect(generator.next().value).toBe('y');
    expect(generator.next().value).toBe('z');
    expect(generator.next().done).toBe(true);
  });

  it('should work with stepSize > 1', () => {
    const generator = letterGenerator(lowercaseAsciiLetterRange, 'w', 2);
    expect(generator.next().value).toBe('w');
    expect(generator.next().value).toBe('y');
    expect(generator.next().done).toBe(true);
  });

  it('should work with stepSize < 0', () => {
    const generator = letterGenerator(lowercaseAsciiLetterRange, 'b', -1);
    expect(generator.next().value).toBe('b');
    expect(generator.next().value).toBe('a');
    expect(generator.next().done).toBe(true);
  });
});

export {};
