import { mod } from './mod';

describe('number.mod', () => {
  it('should return the modulo of the given Number', () => {
    expect(mod(4, 3)).toBe(1);
  });

  it('should return a positive Number for a negative input', () => {
    expect(mod(-1, 3)).toBe(2);
  });
});

export {};
