import { isEmpty } from '../array/isEmpty';

/**
 * Executes all provided Promises in serial and returns either the first result or the last error
 *
 * @param promises
 * @returns a Promise that executes the provided Promises in serial
 */
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
