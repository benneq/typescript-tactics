export const isInteger = (value: unknown): value is number => {
  return Number.isInteger(value);
};

export const inRange =
  (from: number, to: number) =>
  (value: number): boolean => {
    return value >= from && value < to;
  };
