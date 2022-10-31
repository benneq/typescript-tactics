/**
 * Tries to parse an Integer from the given String
 *
 * @param str
 * @returns the parsed Integer or undefined
 */
export const parseInteger = (str: string): number | undefined => {
  const number = Number.parseInt(str);

  return Number.isNaN(number) ? undefined : number;
};
