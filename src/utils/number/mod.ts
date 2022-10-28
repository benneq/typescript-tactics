/**
 *
 * @example
 * mod(4, 3) => 1
 * mod(-1, 3) => 2
 *
 * @param n
 * @param m
 * @returns
 */
export const mod = (n: number, m: number): number => {
  return ((n % m) + m) % m;
};
