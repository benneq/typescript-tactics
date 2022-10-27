import { never } from './never';

describe('promise.never', () => {
  it('never', () => {
    never
      .then(() => {
        throw new Error();
      })
      .catch(() => {
        throw new Error();
      });
  });
});

export {};
