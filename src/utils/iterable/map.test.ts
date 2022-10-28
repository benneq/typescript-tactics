import { map } from './map';

describe('iterable.map', () => {
  it('it should yield the mapped value for each element of the Iterable', () => {
    const generator = map((value) => String(value))([0, 1, 2]);
    expect(generator.next().value).toBe('0');
    expect(generator.next().value).toBe('1');
    expect(generator.next().value).toBe('2');
    expect(generator.next().done).toBe(true);
  });
});

export {};
