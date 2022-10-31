export const mergeFlags = (regexp: RegExp, flags: string) => {
  let newFlags = regexp.flags;

  for (const flag of flags) {
    if (!newFlags.includes(flag)) {
      newFlags += flag;
    }
  }

  return newFlags;
};
