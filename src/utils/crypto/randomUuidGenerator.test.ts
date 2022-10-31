import { uuidRegExp } from '../regexp/uuidRegExp';
import { randomUuidGenerator } from './randomUuidGenerator';

describe('crypto.randomUuidGenerator', () => {
  it('should yield a UUID each time', () => {
    expect(randomUuidGenerator.next().value).toMatch(uuidRegExp);
    expect(randomUuidGenerator.next().value).toMatch(uuidRegExp);
    expect(randomUuidGenerator.next().value).toMatch(uuidRegExp);
    expect(randomUuidGenerator.next().done).toBe(false);
  });
});

export {};
