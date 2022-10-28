/**
 * Creates a Promise that resolves after the given ms with the provided value
 *
 * @example
 * resolveAfterTimeout(100) => ... 100ms later ... Promise.resolve()
 * resolveAfterTimeout(100, "val") => ... 100ms later ... Promise.resolve("val")
 *
 * @param ms
 * @param value
 * @returns a Promise that resolves after the given ms
 */
export const resolveAfterTimeout: {
  (ms: number): Promise<void>;
  <T>(ms: number, value: T): Promise<T>;
} = <T>(ms: number, value?: T): Promise<T | void> => {
  return new Promise((res) => {
    setTimeout(() => res(value), ms);
  });
};
