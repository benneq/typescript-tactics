import { isEmpty } from './array/isEmpty';
import { empty } from './function';

export const never: Promise<unknown> = new Promise(empty);

export const anySerial: {
  (promises: []): Promise<undefined>;
  <T>(promises: Promise<T>[]): Promise<T>;
} = async <T>(promises: Array<Promise<T>>): Promise<T | undefined> => {
  if (isEmpty(promises)) {
    return undefined;
  }

  let lastError;
  for (const promise of promises) {
    try {
      return await promise;
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError;
};
