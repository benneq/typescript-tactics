import { resolveAfterTimeout } from './resolveAfterTimeout';

describe('promise.resolveAfterTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should reject after 100ms', async () => {
    const thenSpy = jest.fn();

    resolveAfterTimeout(100).then(thenSpy);
    expect(thenSpy).not.toHaveBeenCalled();

    jest.advanceTimersByTime(50);
    await Promise.resolve();
    expect(thenSpy).not.toHaveBeenCalled();

    jest.advanceTimersByTime(50);
    await Promise.resolve();
    expect(thenSpy).toHaveBeenNthCalledWith(1, undefined);
    expect(thenSpy).toHaveBeenCalledTimes(1);
  });

  it('should reject with provided error', async () => {
    const thenSpy = jest.fn();

    const value = Symbol();
    resolveAfterTimeout(100, value).then(thenSpy);

    jest.advanceTimersByTime(100);
    await Promise.resolve();
    expect(thenSpy).toHaveBeenNthCalledWith(1, value);
    expect(thenSpy).toHaveBeenCalledTimes(1);
  });
});

export {};
