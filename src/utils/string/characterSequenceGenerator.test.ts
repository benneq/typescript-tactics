import { characterSequenceGenerator } from './characterSequenceGenerator';
import { lowercaseAsciiLetterRange } from './lowercaseAsciiLetterRange';

describe('string.letterGenerator', () => {
  it('should start with a if no value was provided', () => {
    const generator = characterSequenceGenerator(lowercaseAsciiLetterRange);
    expect(generator.next().value).toBe('a');
    expect(generator.next().value).toBe('b');
    expect(generator.next().value).toBe('c');
    expect(generator.next().done).toBe(false);
  });

  it('should generate the same letter if stepSize is 0', () => {
    const generator = characterSequenceGenerator(
      lowercaseAsciiLetterRange,
      '',
      0
    );
    expect(generator.next().value).toBe('a');
    expect(generator.next().value).toBe('a');
    expect(generator.next().value).toBe('a');
    expect(generator.next().done).toBe(false);
  });

  it('should stop after eaching the end of the range', () => {
    const generator = characterSequenceGenerator(
      lowercaseAsciiLetterRange,
      'x'
    );
    expect(generator.next().value).toBe('x');
    expect(generator.next().value).toBe('y');
    expect(generator.next().value).toBe('z');
    expect(generator.next().done).toBe(true);
  });

  it('should work with stepSize > 1', () => {
    const generator = characterSequenceGenerator(
      lowercaseAsciiLetterRange,
      'w',
      2
    );
    expect(generator.next().value).toBe('w');
    expect(generator.next().value).toBe('y');
    expect(generator.next().done).toBe(true);
  });

  it('should work with stepSize < 0', () => {
    const generator = characterSequenceGenerator(
      lowercaseAsciiLetterRange,
      'b',
      -1
    );
    expect(generator.next().value).toBe('b');
    expect(generator.next().value).toBe('a');
    expect(generator.next().done).toBe(true);
  });

  it('should start at last letter if step size is negative and no value was provided', () => {
    const generator = characterSequenceGenerator(
      lowercaseAsciiLetterRange,
      '',
      -1
    );
    expect(generator.next().value).toBe('z');
    expect(generator.next().value).toBe('y');
    expect(generator.next().value).toBe('x');
    expect(generator.next().done).toBe(false);
  });
});

export {};
