import { lowercaseAsciiLetterRange } from './lowercaseAsciiLetterRange';
import { splice } from './splice';

/**
 * A Generator function that will start at the given value and increases the last character by stepSize for each call
 *
 * @example
 * step("a") => ["a","b","c",...]
 * step("b", undefined, -1) => ["b","a","","",...]
 * step("z", lowercaseAsciiLetterRange, -2) => ["z","x","v",...]
 * step("A", uppercaseAsciiLetterRange) => ["A", "B", "C", ...]
 * step("Z", uppercaseAsciiLetterRange, 1) => ["Z","ZA","ZB",...]
 *
 * @param value
 * @returns a Generator that steps through the characters
 */
export function* step(
  value: string,
  charCodeRange: [number, number] = lowercaseAsciiLetterRange,
  stepSize = 1
): Generator<string, void, unknown> {
  const startCharacter = String.fromCharCode(charCodeRange[0]);

  while (true) {
    yield value;

    if (!value) {
      if (stepSize > 0) {
        value = startCharacter;
      }
      continue;
    }

    const replacementCharCode = value.charCodeAt(value.length - 1) + stepSize;

    if (
      replacementCharCode >= charCodeRange[0] &&
      replacementCharCode <= charCodeRange[1]
    ) {
      const replacement = String.fromCharCode(replacementCharCode);
      value = splice(value, -1, 1, replacement);
    } else {
      if (stepSize > 0) {
        value = value + startCharacter;
      } else {
        value = value.slice(0, -1);
      }
    }
  }
}
