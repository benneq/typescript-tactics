import { characterSequenceGenerator } from './characterSequenceGenerator';
import { lowercaseAsciiLetterRange } from './lowercaseAsciiLetterRange';
import { step } from './step';
import { uppercaseAsciiLetterRange } from './uppercaseAsciiLetterRange';

describe('string.step', () => {
  it('should generate the same string if stepSize is 0', () => {
    const generator = step(
      'a',
      characterSequenceGenerator(lowercaseAsciiLetterRange),
      0
    );
    expect(generator.next().value).toBe('a');
    expect(generator.next().value).toBe('a');
    expect(generator.next().value).toBe('a');
    expect(generator.next().done).toBe(false);
  });

  it('should increase to the first letter if initial value was empty', () => {
    const generator = step(
      '',
      characterSequenceGenerator(lowercaseAsciiLetterRange)
    );
    expect(generator.next().value).toBe('a');
    expect(generator.next().value).toBe('b');
    expect(generator.next().done).toBe(false);
  });

  it('should generate an alphabetically ascending sequence if stepSize is greater than 0', () => {
    const generator = step(
      'a',
      characterSequenceGenerator(lowercaseAsciiLetterRange)
    );
    expect(generator.next().value).toBe('a');
    expect(generator.next().value).toBe('b');
    expect(generator.next().value).toBe('c');
    expect(generator.next().done).toBe(false);
  });

  it('should generate a alphabetically descending sequence if stepSize is less than 0', () => {
    const generator = step(
      'Z',
      characterSequenceGenerator(uppercaseAsciiLetterRange),
      -2
    );
    expect(generator.next().value).toBe('Z');
    expect(generator.next().value).toBe('X');
    expect(generator.next().value).toBe('V');
    expect(generator.next().done).toBe(false);
  });

  it('should append a letter if last character has reached the maximum value', () => {
    const generator = step(
      'z',
      characterSequenceGenerator(lowercaseAsciiLetterRange)
    );
    expect(generator.next().value).toBe('z');
    expect(generator.next().value).toBe('aa');
    expect(generator.next().value).toBe('ab');
    expect(generator.next().done).toBe(false);
  });

  it('should remove the last letter if it has reached the minimum value', () => {
    const generator = step(
      'ZA',
      characterSequenceGenerator(uppercaseAsciiLetterRange),
      -1
    );
    expect(generator.next().value).toBe('ZA');
    expect(generator.next().value).toBe('Z');
    expect(generator.next().value).toBe('Y');
    expect(generator.next().done).toBe(false);
  });

  it('should return done if decreasing the mininum value', () => {
    const generator = step(
      'a',
      characterSequenceGenerator(lowercaseAsciiLetterRange),
      -2
    );
    expect(generator.next().value).toBe('a');
    expect(generator.next().done).toBe(true);
  });
});

export {};
