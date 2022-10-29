import { step } from './step';

describe('string.step', () => {
  it('should generate the same string if stepSize is 0', () => {
    const generator = step('a', 0);
    expect(generator.next().value).toBe('a');
    expect(generator.next().value).toBe('a');
    expect(generator.next().value).toBe('a');
    expect(generator.next().done).toBe(false);
  });

  it('should increase to the first letter if initial value was empty', () => {
    const generator = step('');
    expect(generator.next().value).toBe('');
    expect(generator.next().value).toBe('a');
    expect(generator.next().value).toBe('b');
    expect(generator.next().done).toBe(false);
  });

  it('should generate an alphabetically ascending sequence if stepSize is greater than 0', () => {
    const generator = step('a');
    expect(generator.next().value).toBe('a');
    expect(generator.next().value).toBe('b');
    expect(generator.next().value).toBe('c');
    expect(generator.next().done).toBe(false);
  });

  it('should generate a alphabetically descending sequence if stepSize is less than 0', () => {
    const generator3 = step('Z', -2);
    expect(generator3.next().value).toBe('Z');
    expect(generator3.next().value).toBe('X');
    expect(generator3.next().value).toBe('V');
    expect(generator3.next().done).toBe(false);
  });

  it('should append a letter if last character has reached the maximum value', () => {
    const generator3 = step('Z', 1);
    expect(generator3.next().value).toBe('Z');
    expect(generator3.next().value).toBe('Za');
    expect(generator3.next().value).toBe('Zb');
    expect(generator3.next().done).toBe(false);
  });

  it('should remove the last letter if it has reached the minimum value', () => {
    const generator3 = step('Za', -1);
    expect(generator3.next().value).toBe('Za');
    expect(generator3.next().value).toBe('Z');
    expect(generator3.next().value).toBe('Y');
    expect(generator3.next().done).toBe(false);
  });

  it('should return empty string if decreasing the mininum value', () => {
    const generator3 = step('a', -2);
    expect(generator3.next().value).toBe('a');
    expect(generator3.next().value).toBe('');
    expect(generator3.next().value).toBe('');
    expect(generator3.next().done).toBe(false);
  });
});

export {};
