import { splice } from './splice';

/**
 * A Generator function that will start at the given value and increases the last character by stepSize for each call
 *
 * @example
 * step("a") => ["a","b","c",...]
 * step("Z", -2) => ["Z","X","V",...]
 * step("ZZ", 1) => ["ZZ","ZZa","ZZb",...]
 * step("b", -1) => ["b","a","","",...]
 *
 * @param value
 * @returns a Generator that steps through the characters
 */
export function* step(
  value: string,
  stepSize = 1
): Generator<string, void, unknown> {
  while (true) {
    yield value;

    const lastCharacter = value.at(-1);
    if (!lastCharacter) {
      if (stepSize > 0) {
        value = 'a';
      }
      continue;
    }

    const nextCharacter = String.fromCharCode(
      lastCharacter.charCodeAt(0) + stepSize
    );

    if (nextCharacter.match(/[a-zA-Z]/)) {
      value = splice(value, -1, 1, nextCharacter);
    } else {
      if (stepSize > 0) {
        value = splice(value, value.length, 0, 'a');
      } else {
        value = splice(value, -1);
      }
    }
  }
}
