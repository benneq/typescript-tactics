/**
 * Creates a Promise that rejects after the given ms with the provided error
 *
 * @example
 * rejectAfterTimeout(100) => ... 100ms later ... Promise.reject()
 * rejectAfterTimeout(100, "err") => ... 100ms later ... Promise.reject("err")
 *
 * @param ms
 * @param error
 * @returns a Promise that rejects after the given ms
 */
export const rejectAfterTimeout: {
  (ms: number): Promise<void>;
  (ms: number, error: unknown): Promise<void>;
} = (ms: number, error?: unknown): Promise<void> => {
  return new Promise((_, rej) => {
    setTimeout(() => rej(error), ms);
  });
};
