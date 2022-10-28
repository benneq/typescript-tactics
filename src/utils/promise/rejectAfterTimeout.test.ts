import { rejectAfterTimeout } from './rejectAfterTimeout';

describe('promise.rejectAfterTimeout', () => {
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
    const catchSpy = jest.fn();

    rejectAfterTimeout(100).catch(catchSpy);
    expect(catchSpy).not.toHaveBeenCalled();

    jest.advanceTimersByTime(50);
    await Promise.resolve();
    expect(catchSpy).not.toHaveBeenCalled();

    jest.advanceTimersByTime(50);
    await Promise.resolve();
    expect(catchSpy).toHaveBeenNthCalledWith(1, undefined);
    expect(catchSpy).toHaveBeenCalledTimes(1);
  });

  it('should reject with provided error', async () => {
    const catchSpy = jest.fn();

    const error = Symbol();
    rejectAfterTimeout(100, error).catch(catchSpy);

    jest.advanceTimersByTime(100);
    await Promise.resolve();
    expect(catchSpy).toHaveBeenNthCalledWith(1, error);
    expect(catchSpy).toHaveBeenCalledTimes(1);
  });
});

export {};
