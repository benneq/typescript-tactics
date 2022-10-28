export const rejectAfterTimeout: {
  (ms: number): Promise<undefined>;
  <T>(ms: number, error: T): Promise<T>;
} = <T>(ms: number, error?: T): Promise<T | undefined> => {
  return new Promise((_, rej) => {
    setTimeout(() => rej(error), ms);
  });
};
