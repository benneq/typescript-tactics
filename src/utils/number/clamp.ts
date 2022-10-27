/**
 * Ensures that the given value is between min and max
 *
 * @param min
 * @param max
 * @returns the clamped number
 */
export const clamp =
  (min: number, max: number) =>
  (value: number): number => {
    return value < min ? min : value > max ? max : value;
  };
