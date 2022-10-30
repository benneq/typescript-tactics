export const regExpTemplate = (
  strings: ReadonlyArray<string>,
  ...keys: RegExp[]
) => {
  let str = '';
  for (let i = 0; i < keys.length; i++) {
    str += (strings[i] as string) + keys[i]?.source;
  }
  return RegExp(str + strings[strings.length - 1]);
};
