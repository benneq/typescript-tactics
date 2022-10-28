export const resolveAfterTimeout: {
  (ms: number): Promise<void>;
  <T>(ms: number, value: T): Promise<T>;
} = <T>(ms: number, value?: T): Promise<T | undefined> => {
  return new Promise((res) => {
    setTimeout(() => res(value), ms);
  });
};
