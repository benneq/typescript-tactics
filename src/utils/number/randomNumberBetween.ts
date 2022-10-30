/**
 * Computes a random number between min (incl.) and max (incl.)
 *
 * @param min
 * @param max
 * @returns
 */
export const randomNumberBetween = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
