import { done } from './done';
import { fromFunction } from './fromFunction';

describe('generator.fromFunction', () => {
  it('should call the provider each time and yield its returned value', () => {
    const value = Symbol();
    const provider = jest.fn(() => value);

    const generator = fromFunction(provider);

    expect(generator.next().value).toEqual(value);
    expect(generator.next().value).toEqual(value);
    expect(generator.next().value).toEqual(value);
    expect(generator.next().done).toBe(false);
    expect(provider).toHaveBeenCalledTimes(4);
  });
});

export {};
