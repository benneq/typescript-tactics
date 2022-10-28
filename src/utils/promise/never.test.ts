import { never } from './never';

describe('promise.never', () => {
  it('should never fulfill', async () => {
    const spy = jest.fn();

    never.then(spy).catch(spy).finally(spy);

    await Promise.resolve();

    expect(spy).not.toHaveBeenCalled();
  });
});

export {};
