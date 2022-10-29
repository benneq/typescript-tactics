/**
 * A Generator function that will start at the given value and add stepSize to it for each call
 *
 * @example
 * numberSequenceGenerator(1, 2) => [1,3,5,...]
 *
 * @param value
 * @returns a Generator that steps through the numbers
 */
export function* numberSequenceGenerator(
  value: number,
  stepSize: number
): Generator<number, void, unknown> {
  while (true) {
    yield value;
    value += stepSize;
  }
}
