import { isEmpty } from '../array';

/**
 * Executes all provided Promises in serial order and returns either the first result or the last error
 *
 * @example
 * anySerial([]) => Promise.resolve()
 * anySerial(Promise.resolve(1)) => Promise.resolve(1)
 * anySerial(Promise.reject(""), Promise.resolve(1)) => Promise.resolve(1)
 * anySerial(Promise.reject("")) => Promise.reject("")
 *
 * @param promises the Promises to execute in serial order
 * @returns a Promise that executes the provided Promises in serial
 */
export const anySerial: {
  (promises: []): Promise<void>;
  <T>(promises: Promise<T>[]): Promise<T>;
} = async <T>(promises: Array<Promise<T>>): Promise<T | void> => {
  if (isEmpty(promises)) {
    return;
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
