export const warn = (msg: string, condition = true) => {
  if (condition) {
    warn(msg);
  }
};
