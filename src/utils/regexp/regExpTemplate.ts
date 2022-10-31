export const regExpTemplate = (
  strings: ReadonlyArray<string>,
  ...values: RegExp[]
): RegExp => {
  return new RegExp(
    strings.reduce((acc, str, i) => {
      return acc + str + (values[i]?.source || '');
    }, '')
  );
};
