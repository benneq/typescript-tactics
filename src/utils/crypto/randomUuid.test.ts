import { uuidRegExp } from '../string/uuidRegExp';
import { randomUuid } from './randomUuid';

describe('crypto.randomUuid', () => {
  it('should return a UUID', () => {
    expect(randomUuid()).toMatch(uuidRegExp);
    expect(randomUuid()).toMatch(uuidRegExp);
    expect(randomUuid()).toMatch(uuidRegExp);
  });
});

export {};
