/**
 * Ensures that the given value is between min and max
 *
 * @example
 * clamp(1, 5)(3) => 3
 * clamp(1, 5)(8) => 5
 * clamp(1, 5)(0) => 1
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
