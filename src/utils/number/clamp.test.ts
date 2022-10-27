import { clamp } from './clamp';

describe('number.clamp', () => {
  it('clamp', () => {
    expect(clamp(0, 0)(0)).toEqual(0);
    expect(clamp(0, 0)(1)).toEqual(0);
    expect(clamp(0, 0)(-1)).toEqual(0);
    expect(clamp(-1, 1)(-2)).toEqual(-1);
    expect(clamp(-1, 1)(-1)).toEqual(-1);
    expect(clamp(-1, 1)(0)).toEqual(0);
    expect(clamp(-1, 1)(1)).toEqual(1);
    expect(clamp(-1, 1)(2)).toEqual(1);

    // negative range
    expect(clamp(1, -1)(0)).toEqual(1);
  });
});

export {};
