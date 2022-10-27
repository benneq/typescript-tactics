/**
 * A Generator function that will start at the given value and add stepSize to it for each call
 *
 * @param value
 * @returns a Generator that steps through the numbers
 */
export function* step(
  value: number,
  stepSize: number
): Generator<number, void, unknown> {
  while (true) {
    yield value;
    value += stepSize;
  }
}
