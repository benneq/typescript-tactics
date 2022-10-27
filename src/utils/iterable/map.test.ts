import { map } from './map';

describe('iterable.map', () => {
  it('map', () => {
    const generator = map((value) => String(value))([0, 1, 2]);
    expect(generator.next().value).toEqual('0');
    expect(generator.next().value).toEqual('1');
    expect(generator.next().value).toEqual('2');
    expect(generator.next().done).toEqual(true);
  });
});

export {};
