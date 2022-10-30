export const global = (regExp: RegExp) => {
  return RegExp(regExp, regExp.flags + 'g');
};
