import { uuidRegExp } from '../regexp/uuidRegExp';
import { randomUuid } from './randomUuid';

describe('crypto.randomUuid', () => {
  it('should return a UUID', () => {
    expect(randomUuid()).toMatch(uuidRegExp);
    expect(randomUuid()).toMatch(uuidRegExp);
    expect(randomUuid()).toMatch(uuidRegExp);
  });
});

export {};
