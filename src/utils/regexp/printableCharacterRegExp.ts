/**
 * Includes all printable ASCII and Unicode characters
 *
 * Using uppercase P to exclude all control characters.
 */
export const printableCharacterRegExp = /\P{C}/u;
