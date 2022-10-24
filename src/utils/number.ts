export type NumberCompatible = number | bigint;

export const isNumber = (value: unknown): value is number => {
  return typeof value === 'number';
};

export const toNumber = (value: NumberCompatible): number => {
  return Number(value);
};

export const isInteger = (value: unknown): value is number => {
  return Number.isInteger(value);
};

export const isFloat = (value: unknown): value is number => {
  return Number.isFinite(value);
};

export const clamp =
  (min: number, max: number) =>
  (value: number): number => {
    return value < min ? min : value > max ? max : value;
  };

export function* step(
  value: number,
  stepSize: number
): Generator<number, void, unknown> {
  while (true) {
    yield value;
    value += stepSize;
  }
}
