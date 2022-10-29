import { uuidRegExp } from '../string/uuidRegExp';
import { randomUuidGenerator } from './randomUuidGenerator';

describe('generator.randomUuidGenerator', () => {
  it('should call the provider each time and yield its returned value', () => {
    expect(randomUuidGenerator.next().value).toMatch(uuidRegExp);
    expect(randomUuidGenerator.next().value).toMatch(uuidRegExp);
    expect(randomUuidGenerator.next().value).toMatch(uuidRegExp);
    expect(randomUuidGenerator.next().done).toBe(false);
  });
});

export {};
