import { never } from './promise';

describe('predicate', () => {
  it('never', () => {
    never
      .then(() => {
        throw new Error();
      })
      .catch(() => {
        throw new Error();
      })
      .finally(() => {
        throw new Error();
      });
  });
});

export {};
