import { step } from './step';

describe('number.step', () => {
  it('step', () => {
    const generator1 = step(0, 0);
    expect(generator1.next().value).toEqual(0);
    expect(generator1.next().value).toEqual(0);
    expect(generator1.next().value).toEqual(0);
    expect(generator1.next().done).toEqual(false);

    const generator2 = step(-2, 4);
    expect(generator2.next().value).toEqual(-2);
    expect(generator2.next().value).toEqual(2);
    expect(generator2.next().value).toEqual(6);
    expect(generator2.next().done).toEqual(false);

    const generator3 = step(1, -3);
    expect(generator3.next().value).toEqual(1);
    expect(generator3.next().value).toEqual(-2);
    expect(generator3.next().value).toEqual(-5);
    expect(generator3.next().done).toEqual(false);
  });
});

export {};
