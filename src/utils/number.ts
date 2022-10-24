export const isInteger = (value: unknown): value is number => {
  return Number.isInteger(value);
};

export const inRange =
  (from: number, to: number) =>
  (value: number): boolean => {
    return value >= from && value < to;
  };

export const clamp =
  (min: number, max: number) =>
  (value: number): number => {
    return value < min ? min : value > max ? max : value;
  };
