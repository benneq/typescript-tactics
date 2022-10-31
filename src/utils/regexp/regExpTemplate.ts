export const regExpTemplate = (
  strings: ReadonlyArray<string>,
  ...keys: RegExp[]
): RegExp => {
  return new RegExp(
    strings.reduce((acc, str, i) => {
      return acc + str + (keys[i]?.source || '');
    }, '')
  );
};
