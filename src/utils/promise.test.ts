import { anySerial, never } from './promise';

describe('predicate', () => {
  it('never', () => {
    never
      .then(() => {
        throw new Error();
      })
      .catch(() => {
        throw new Error();
      });
  });

  /**
   * A function to wrap the Promise constructor such that no rejections are considered unhandled
   * by either Node or Jest. Whatever handlers can still be attached and rejections turned into
   * thrown exceptions where ever the returned promise is awaited.
   *
   * @see https://github.com/facebook/jest/issues/9210
   */
  function makePromise<T>(
    executor: (
      resolve: (value: T | PromiseLike<T>) => void,
      reject: (reason?: any) => void
    ) => void
  ): Promise<T> {
    const promise = new Promise(executor);
    promise.catch(() => {});
    return promise;
  }

  it('anySerial', async () => {
    const res1 = anySerial([]);
    expect(res1).resolves.toBeUndefined();

    const resolveValue1 = Symbol();
    const res2 = anySerial([new Promise((res) => res(resolveValue1))]);
    expect(res2).resolves.toBe(resolveValue1);

    const rejectValue = Symbol();
    const res3 = anySerial([new Promise((_, rej) => rej(rejectValue))]);
    expect(res3).rejects.toBe(rejectValue);

    const resolveValue2 = Symbol();
    const res4 = anySerial([
      new Promise((res) => res(resolveValue1)),
      new Promise((res) => res(resolveValue2)),
      makePromise((_: any, rej: any) => rej(rejectValue)),
    ]);
    expect(res4).resolves.toBe(resolveValue1);

    const res5 = anySerial([
      new Promise((_, rej) => rej(rejectValue)),
      new Promise((res) => res(resolveValue1)),
    ]);
    expect(res5).resolves.toBe(resolveValue1);
  });
});

export {};
