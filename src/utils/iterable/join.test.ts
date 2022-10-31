import { join } from './join';
import { zip } from './zip';

describe('iterable.join', () => {
  it('should be done immediatly if Iterable is empty', () => {
    const generator = join(1)([]);
    expect(generator.next().done).toBe(true);
  });

  it('should be yield a single value if Iterator only has a single element', () => {
    const generator = join(1)([3]);
    expect(generator.next().value).toEqual(3);
    expect(generator.next().done).toBe(true);
  });

  it('should yield all elements of the iterable interleaved with the separator', () => {
    const generator = join(1)([1, 2, 3]);
    expect(generator.next().value).toEqual(1);
    expect(generator.next().value).toEqual(1);
    expect(generator.next().value).toEqual(2);
    expect(generator.next().value).toEqual(1);
    expect(generator.next().value).toEqual(3);
    expect(generator.next().done).toBe(true);
  });
});

export {};
